// utils/leadDistribution.js

// Список менеджеров
const managers = [
    { id: 1, name: 'Алёна', specialization: ['websites', 'support'], currentLoad: 0, maxLoad: 5, priority: 1 },
    { id: 2, name: 'Светлана', specialization: ['advertising', 'seo'], currentLoad: 0, maxLoad: 5, priority: 2 },
    { id: 3, name: 'Маргарита', specialization: ['websites', 'design'], currentLoad: 0, maxLoad: 5, priority: 1 },
    { id: 4, name: 'Юлия', specialization: ['seo', 'analytics'], currentLoad: 0, maxLoad: 5, priority: 2 },
    { id: 5, name: 'Кристина', specialization: ['advertising', 'smm'], currentLoad: 0, maxLoad: 5, priority: 1 }
]

// Типы лидов и их специализация
const leadTypes = {
    website: ['websites'],
    seo: ['seo'],
    advertising: ['advertising'],
    support: ['support'],
    design: ['design'],
    smm: ['smm']
}

// База данных распределенных лидов (в localStorage)
let assignedLeads = JSON.parse(localStorage.getItem('assignedLeads') || '[]')

// Получение текущей загрузки менеджеров
export function getManagerLoad() {
    const today = new Date().toDateString()
    const todayLeads = assignedLeads.filter(lead =>
        new Date(lead.assignedDate).toDateString() === today
    )

    managers.forEach(manager => {
        manager.currentLoad = todayLeads.filter(lead => lead.managerId === manager.id).length
    })

    return managers
}

// Определение типа лида на основе данных формы
export function detectLeadType(formData) {
    let scores = {
        websites: 0,
        seo: 0,
        advertising: 0,
        support: 0,
        design: 0,
        smm: 0
    }

    // Анализ текста сообщения
    if (formData.message) {
        const msg = formData.message.toLowerCase()
        if (msg.includes('сайт') || msg.includes('разработк') || msg.includes('создать сайт')) scores.websites += 3
        if (msg.includes('продвижен') || msg.includes('топ') || msg.includes('seo')) scores.seo += 3
        if (msg.includes('реклам') || msg.includes('яндекс') || msg.includes('директ')) scores.advertising += 3
        if (msg.includes('поддержк') || msg.includes('хостинг')) scores.support += 3
        if (msg.includes('дизайн') || msg.includes('логотип')) scores.design += 3
        if (msg.includes('smm') || msg.includes('соцсет') || msg.includes('vk')) scores.smm += 3
    }

    // Анализ выбранной услуги
    if (formData.service) {
        const service = formData.service.toLowerCase()
        if (service.includes('сайт')) scores.websites += 5
        if (service.includes('продвиж')) scores.seo += 5
        if (service.includes('реклам')) scores.advertising += 5
    }

    // Возвращаем тип с максимальным баллом
    const maxType = Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b, ['websites', 0])[0]
    return maxType
}

// Алгоритм распределения лида
export function assignLead(leadData) {
    const managersWithLoad = getManagerLoad()
    const leadType = detectLeadType(leadData)

    // Ищем менеджеров, подходящих по специализации
    let suitableManagers = managersWithLoad.filter(manager =>
        manager.specialization.includes(leadType) &&
        manager.currentLoad < manager.maxLoad
    )

    // Если нет подходящих, берем всех доступных
    if (suitableManagers.length === 0) {
        suitableManagers = managersWithLoad.filter(m => m.currentLoad < m.maxLoad)
    }

    // Round-robin: выбираем менеджера с наименьшей загрузкой
    suitableManagers.sort((a, b) => a.currentLoad - b.currentLoad)
    const selectedManager = suitableManagers[0]

    if (!selectedManager) {
        // Все менеджеры перегружены — сохраняем в очередь
        const queue = JSON.parse(localStorage.getItem('leadQueue') || '[]')
        queue.push({ ...leadData, timestamp: new Date().toISOString() })
        localStorage.setItem('leadQueue', JSON.stringify(queue))
        return { success: false, message: 'Все менеджеры заняты. Заявка добавлена в очередь.' }
    }

    // Создаем запись о назначении
    const assignment = {
        id: Date.now(),
        leadId: leadData.id || Date.now(),
        managerId: selectedManager.id,
        managerName: selectedManager.name,
        leadType: leadType,
        leadData: leadData,
        assignedDate: new Date().toISOString(),
        status: 'pending'
    }

    assignedLeads.push(assignment)
    localStorage.setItem('assignedLeads', JSON.stringify(assignedLeads))

    // Обновляем загрузку
    getManagerLoad()

    // Отправляем уведомление менеджеру (имитация)
    console.log(`Лида назначен менеджеру ${selectedManager.name}`)

    return {
        success: true,
        manager: selectedManager,
        assignment: assignment
    }
}

// Получение очереди лидов для менеджера
export function getManagerLeads(managerId) {
    return assignedLeads.filter(lead =>
        lead.managerId === managerId &&
        lead.status === 'pending'
    ).sort((a, b) => new Date(a.assignedDate) - new Date(b.assignedDate))
}

// Закрытие лида (выполнен/отказ)
export function closeLead(leadId, status) {
    const leadIndex = assignedLeads.findIndex(l => l.id === leadId)
    if (leadIndex !== -1) {
        assignedLeads[leadIndex].status = status
        assignedLeads[leadIndex].closedDate = new Date().toISOString()
        localStorage.setItem('assignedLeads', JSON.stringify(assignedLeads))
    }
}

// Статистика по менеджерам
export function getManagerStats() {
    const stats = {}
    managers.forEach(manager => {
        const managerLeads = assignedLeads.filter(l => l.managerId === manager.id)
        stats[manager.id] = {
            name: manager.name,
            total: managerLeads.length,
            completed: managerLeads.filter(l => l.status === 'completed').length,
            rejected: managerLeads.filter(l => l.status === 'rejected').length,
            pending: managerLeads.filter(l => l.status === 'pending').length,
            currentLoad: manager.currentLoad
        }
    })
    return stats
}