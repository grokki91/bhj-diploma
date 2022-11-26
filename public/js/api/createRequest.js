/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    let url = options.url;
    let method = options.method;
    let data;
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
            data = new FormData;
            data.forEach(([key, value]) => {
                data = data.append(key, value);
            })
        }
    } else {
        url = options.url;
    }

    try {
        const xhr = new XMLHttpRequest(); 
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.send(data);
        xhr.addEventListener('load', callback(xhr))

    } catch (error) {
        xhr.addEventListener('error', callback(error)) 
    }

}