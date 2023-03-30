/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    let url = options.url;
    let method = options.method;
    let data;
    let formData = new FormData;
    const callback = (e) => console.log(e);

    if (options.data) {
        data = Object.entries(options.data);

        if (method === 'GET') {
            data.forEach(([key, value]) => {
                let pair = `${key}=${value}`;
                url = `${url}?${pair}`.slice(0, -1);
                pair = '&' + pair;
            })

            data = {}; // для GET передаем пустое тело
        } else {
            [...data].forEach(([key, value]) => {
                formData.append(key, value)
            });
        }
        
    } else {
        url = options.url;
    }

    try {
        const xhr = new XMLHttpRequest(); 
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.send(method === 'GET' ? data : formData);
        xhr.addEventListener('load', callback(xhr))

    } catch (error) {
        xhr.addEventListener('error', callback(error)) 
    }

}