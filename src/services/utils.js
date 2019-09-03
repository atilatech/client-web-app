
export function genericItemTransform (item) {

    item.type = getItemType(item);

    switch(item.type) {
        case 'scholarship':
            item = {
                title: item.name,
                description: item.description,
                id: item.id,
                slug: `/scholarship/${item.slug}/`,
                image: item.img_url,
                type: item.type,
            };
            break;
        case 'essay':
            item = {
                title: item.title,
                description: item.description,
                id: item.id,
                slug: `/essay/${item.user.username}/${item.slug}/`,
                image: `${item.user.profile_pic_url}`,
                type: item.type,
                user: item.user,
            };
            break;
        case 'blog':
            item = {
                title: item.title,
                description: item.description,
                image: item.header_image_url,
                id: item.id,
                slug: `/blog/${item.user.username}/${item.slug}/`,
                type: item.type,
                user: item.user,
            };
            break;
        case 'forum':
            item = {
                title: item.starting_comment ? item.starting_comment.title || item.title : item.title,
                description: item.starting_comment ?  item.starting_comment.text || item.text: item.text,
                id: item.id,
                slug: `/forum/${item.slug}/`,
                type: item.type,
            };
            break;
        default:
        // code block
    }

    return item;

}


export function getItemType(item) {

    let itemType = '';
    if (item.hasOwnProperty('deadline')) {
        itemType = 'scholarship'
    }
    else if (item.hasOwnProperty('starting_comment')) {
        itemType = 'forum'
    }
    else if (item.hasOwnProperty('header_image_url')) {
        itemType = 'blog'
    }
    else if (item.hasOwnProperty('essay_source_url')) {
        itemType = 'essay'
    }
    return itemType;
}