const columns = [
    {
        key: 'name',
        title: '姓名',
        type: '',
        width: 120
    },
    {
        key: 'nickName',
        title: '昵称',
        type: '',
        width: 80
    },
    {
        key: 'sex',
        title: '性别',
        type: 'tag',
        width: 80
    },
    {
        key: 'mobileNo',
        title: '手机号',
        width: 150
    },
    {
        key: 'address',
        title: '地址',
        type: 'tag',
        width: 170
    },
    {
        key: 'idCard',
        title: '身份证号',
        type: 'tag',
        width: 170
    },
    {
        key: 'status',
        title: '状态',
        type: 'tag',
        width: 170
    }
]

const handle = {
    title: '操作',

    size: 'small',
    btns: [
        {
            label: '编辑',
            type: 'primary',
            event: 'edit',
            icon: 'edit'
        },
        {
            label: '修改密码',
            type: 'primary',
            event: 'editPwd',
            icon: 'lock'
        },
        {
            label: '删除',
            type: 'danger',
            event: 'delete',
            icon: 'delete'
        }
    ]
}

const requestOptions = {
    url: '/admin/getall',
    method: 'POST',
    params: {

    }
}

export const pageConfig = {
    columns,
    handle,
    requestOptions
}