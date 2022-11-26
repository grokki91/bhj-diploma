/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const toggle = () => {
      document.body.classList.toggle('sidebar-open');
      document.body.classList.toggle('sidebar-collapse')
    }

    sidebarToggle.addEventListener('click', toggle)
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const modalRegister = () => new Modal(App.getModal('register')).open();
    const modalLogin = () => new Modal(App.getModal('login')).open();
    // const modalLogout  = () => {
    //   User.logout()
    // };

    document.querySelector('.menu-item_register').addEventListener('click', modalRegister);
    document.querySelector('.menu-item_login').addEventListener('click', modalLogin);
    // document.querySelector('.menu-item_logout').addEventListener('click', modalLogout);
  }
}
