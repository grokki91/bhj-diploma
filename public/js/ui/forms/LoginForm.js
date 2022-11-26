/**
 * Класс LoginForm управляет формой
 * входа в портал
 * */
class LoginForm extends AsyncForm {
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    data = new AsyncForm(document.getElementById('login-form')).getData();
    User.login(data, (err, response) => {
      if (response.success) {
        App.setState('user-logged');
        new Modal(App.getModal('login')).close();
      } 
    })
  }
}