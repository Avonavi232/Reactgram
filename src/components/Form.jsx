import React from 'react';
import Input from './Input';

function Form({ onSubmit }) {
    return (
        <form onSubmit={onSubmit} className="signup-form mdc-theme--dark">
            <Input
                type="text"
                name="firstname"
                placeholder="Имя"
            />
            <Input
                type="text"
                name="lastname"
                placeholder="Фамилия"
            />
            <Input
                type="email"
                name="email"
                placeholder="Email"
            />
            <Input
                type="password"
                name="password"
                placeholder="Пароль"
            />
            <button type="submit" className="mdc-button mdc-button--primary mdc-button--raised">Зарегистрироваться</button>
        </form>
    );
}

export default Form;