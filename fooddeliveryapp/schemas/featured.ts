export default {
    name: 'featured',
    title: 'Featured Menu categories',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Fetured Name',
            type: 'string',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'short_description',
            title: 'Short Description',
            type: 'string',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'resturants',
            title: 'Resturants',
            type: 'array',
           of: [{ type: 'reference', to: [{ type: 'resturant' }] }],
        },
       
    ],
   
};