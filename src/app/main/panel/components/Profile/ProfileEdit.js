import React from "react";
import { Field } from "../Field/Field";
import { Title } from "../Title/Title";
import { CustomTabPanel } from "../Field/TabPanel";
import Button from "@material-ui/core/Button";

export function ProfileEdit() {

    const profileFields = [
        {
            label: 'Контактное лицо',
            placeholder: 'Иванов',
            type: 'input'
        },
        {
            label: 'Телефон контактного лица',
            placeholder: '+79991234567',
            type: 'input'
        },
        {
            label: 'Email контактного лица',
            placeholder: 'ivan@ivan.com',
            type: 'input'
        },
        {
            label: 'Система взаиморасчетов',
            placeholder: 'Предоплата',
            type: 'select'
        },
        {
            label: 'Номер карты для выплат',
            placeholder: 'Предоплата',
            type: 'input'
        },
    ];

    const profileAuth = [
        {
            label: 'Логин',
            placeholder: '12345_AA',
            type: 'input'
        },
        {
            label: 'Пароль',
            placeholder: 'очень сложный пароль 2',
            type: 'password'
        },
    ];

    return <div>
        <Title>
            Профиль
        </Title>
        <div>
            {
                profileFields.map(field => <Field key={field.label} {...field}/>)
            }
        </div>
        <div>
            {
                profileAuth.map(field => <Field key={field.label} {...field}/>)
            }
        </div>
        <Title>
            Уведомления
        </Title>
        <CustomTabPanel/>

        <div>
            <Button
                className="p-16 text-white"
                color="secondary"
                variant="contained">
                Сохранить</Button>
        </div>
    </div>
}
