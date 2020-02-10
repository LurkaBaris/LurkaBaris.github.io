// import DarkSkyApi from "dark-sky-api";
function fetchDark(item, position) {
    item.apiKey = "42500ceb4860e8b97ce6298bbbca1b7d";
    item.units = 'us'; // default 'us'
    item.language = 'en'; // default 'en'
    item.postProcessor = (item) => { // default null;
        item.day = item.dateTime.format('ddd');
        return item;
    };

    return item.loadCurrent(position)
        .then(item => {
            // console.log(item);
            return item;
        })
        .catch(err => {
            return null;
        });
}
