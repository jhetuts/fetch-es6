const fetchApi = new FetchLibrary();

fetchApi.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        const get = document.getElementById('get');
        res.forEach((user) => {
            get.innerHTML += `<li>${user.name}</li>`;
        });
    })
    .catch(err => console.log(err));

const data = {
    title: 'New Post',
    body: 'Some content here...'
};

fetchApi.post('https://jsonplaceholder.typicode.com/posts', data)
    .then(res => {
        const post = document.getElementById('post');
        
        post.innerHTML = `
            <article>
                <p><b>Title:</b> ${res.title}</p>
                <p><b>Body:</b> ${res.body}</p>
            </article>`;
    })
    .catch(err => console.log(err));

const newData = {
    title: 'Edit "New Post"',
    body: 'Edited "Content"'
};

fetchApi.put('https://jsonplaceholder.typicode.com/posts/100', newData)
    .then(res => {
        const put = document.getElementById('put');
        
        put.innerHTML = `
            <article>
                <p><b>Title:</b> ${res.title}</p>
                <p><b>Body:</b> ${res.body}</p>
            </article>`;
    })
    .catch(err => console.log(err));


fetchApi.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => {
        const del = document.getElementById('delete');
        
        del.innerHTML = `<p>Post with <code>id=1</code> is successfully deleted!</p>`;
    })
    .catch(err => console.log(err));