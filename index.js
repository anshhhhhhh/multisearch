let current_search = 'google'
document.querySelector('.search_input').addEventListener('keyup', e => {
    const input = e.target.value;
    let search_engine = input.split(' ')[0].toLowerCase();
    let search_query = input.substring(input.indexOf(' ')+1);
    if(search_engine !== current_search) {
        current_search = search_engine;
        const image = document.querySelector('.search_icon');
        switch(search_engine){
            case 'google':
                image.src = 'google.png';
                image.alt = 'Google icon';
                break;
            case 'youtube':
                image.src = 'youtube.png';
                image.alt = 'YouTube icon';
                break;
            case 'docs':
                image.src = 'docs.png';
                image.alt = 'Google Docs icon';
                break;
            case 'sheets':
                image.src = 'sheets.png';
                image.alt = 'google sheets icon';
                break;
            case 'drive':
                image.src = 'google-drive.png';
                image.alt = 'google drive icon';
                break;
            case 'slides':
                image.src = 'slides.png';
                image.alt = 'google slides icon';
                break;
        }
    }
    if(e.key === 'Enter')
        switch(search_engine) {
            case 'docs':
                window.location = `https://docs.google.com/document/?q=${search_query}`;
                break;
            case 'youtube': 
                window.location = `https://www.youtube.com/results?search_query=${search_query}`;
                break;
            case 'sheets':
                window.location = `https://docs.google.com/spreadsheets/?q=${search_query}`;
                break;
            case 'drive':
                window.location = `https://drive.google.com/drive/search?q=${search_query}`;
                break;
            case 'slides':
                window.location = `https://docs.google.com/presentation/?tgif=d&q=${search_query}`;
                break;
            default: 
                window.location = `https://www.google.com/search?q=${search_query}`;
        }
});
