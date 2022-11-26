/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    // почему-то не работает, хотя запрос формируется успешно...
    data = new AsyncForm(document.getElementById('register-form')).getData();
    User.register(data, (err, response) => {
      if (response.success) {
        App.setState('user-logged');
        new Modal(App.getModal('register')).close();
      }
    })
  }
}