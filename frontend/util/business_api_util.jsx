export const fetchRestaurant = id => (
    $.ajax({
        method: 'get',
        url: `/api/businesses/${id}`
    })
)

export const fetchBusinesses = () => (
    $.ajax({
        method: 'get',
        url: '/api/businesses'
    })
)