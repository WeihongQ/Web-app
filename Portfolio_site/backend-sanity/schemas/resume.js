export default{
    name:'resume',
    title:'Resume',
    type: 'document',
    fields:[
        {
            name:'field',
            title:'Field',
            type:'string'
        },
        {
            name:'file',
            title:'File link',
            type:'string'
        },
        {
            name:'icon',
            title:'Icon',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}