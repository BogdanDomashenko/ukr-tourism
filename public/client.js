let internalExternal = new Vue({
    el: '#internal-external',
    data: {
        info: {totalInernalexternal: 122, inernalCount: 12, externalCount: 13}
    },
    async mounted() {
        this.info = await request('/api/internalExternal/');
    },
});

async function request(url, method = "GET", data = null) {
    try {
        const headers = {}
        let body;

        if (data) {
            headers['Content-Type'] = 'aplication/json';
            body = JSON.stringify(data);
        }

        const response = await fetch(url, {
            method,
            headers,
            body
        });
        return await response.json();
    } catch(e) {
        console.warn('Error', e.message);
    }
}