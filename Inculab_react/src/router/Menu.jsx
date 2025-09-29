export var navigation = [
    { name: 'Dashboard', icon: "HomeIcon", href: '/dashboard' },
    {
            name: 'Inspiring',
            icon: 'StarIcon',
            permissions: [],
            children: [
                { name: 'Categoria', href: 'categoria/list', icon: 'Bars3CenterLeftIcon', permissions: ['read_categoria'] },
{ name: 'Casos', href: 'casos/list', icon: 'UserGroupIcon', permissions: ['read_casos'] },
{ name: 'Autor', href: 'autor/list', icon: 'UserIcon', permissions: ['read_autor'] },
//childrenInspiring
            ],
        },
        {
            name: 'Partners',
            icon: 'HeartIcon',
            permissions: [],
            children: [
                { name: 'Proyectos', href: 'proyectos/list', icon: 'BookOpenIcon', permissions: ['read_proyectos'] },
{ name: 'Matches', href: 'matches/list', icon: 'UserGroupIcon', permissions: ['read_matches'] },
{ name: 'Mensajes', href: 'mensajes/list', icon: 'ChatBubbleBottomCenterIcon', permissions: ['read_mensajes'] },
//childrenPartners
            ],
        },
        //sectionMenu
]
export var adminNavigation = [
    {
        name: 'Gestion de Usuarios',
        icon: "UsersIcon",
        permissions: [],
        children: [
            { name: 'Usuarios', href: 'user/list', icon: "UserIcon", permissions: ["read_user"] },
            { name: 'Grupos/Permisos', href: 'group/list', icon: "KeyIcon", permissions: ["read_group"] },
        ],
    },
]

//Llenar Permisos
navigation.forEach(element => {
    if (element.children) {
        var permissions = [];
        element.children.forEach(element2 => {
            permissions.push(element2.permissions);
        });
        element.permissions = permissions;
    }
});
adminNavigation.forEach(element => {
    if (element.children) {
        var permissions = [];
        element.children.forEach(element2 => {
            permissions.push(element2.permissions);
        });
        element.permissions = permissions;
    }
});