export default {
    name: 'category',
    title: 'Menu Category',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Category Name',
            type: 'string',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'image',
            title: 'Image of category',
            type: 'image',
        },
       
    ],
   
};