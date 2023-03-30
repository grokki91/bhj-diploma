/**
 * Класс Modal отвечает за
 * управление всплывающими окнами.
 * В первую очередь это открытие или
 * закрытие имеющихся окон
 * */
class Modal {
  /**
   * Устанавливает текущий элемент в свойство element
   * Регистрирует обработчики событий с помощью Modal.registerEvents()
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element){
    this.element = element;
    if (!this.element) {
      throw Error('Передан пустой элемент');
    } else {
      this.registerEvents();
    }
  }

  /**
   * При нажатии на элемент с data-dismiss="modal"
   * должен закрыть текущее окно
   * (с помощью метода Modal.onClose)
   * */
  registerEvents() {
    if (this.element instanceof Modal) {
      const dismissModals = this.element.element.querySelectorAll('[data-dismiss="modal"]');
      dismissModals.forEach(btn => {
        btn.addEventListener('click', (e) => this.onClose(e.target));
      })
    }
  }

  /**
   * Срабатывает после нажатия на элементы, закрывающие окно.
   * Закрывает текущее окно (Modal.close())
   * 
   * */
  onClose(e) {
    this.close(e);
  }
  /**
   * Открывает окно: устанавливает CSS-свойство display
   * со значением «block»
   * */
  open() {
    if (this.element instanceof Modal) {
      this.element.element.style.display = 'block';
    }
  }
  /**
   * Закрывает окно: удаляет CSS-свойство display
   * */
  close(){
    this.element.style.display = 'none';
  }
}