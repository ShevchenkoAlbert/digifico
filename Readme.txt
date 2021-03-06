Общие требования к выполнению тестового задания:
1. Использовать Angular 8 или 9 версии
2. Использовать ReactiveForms
3. Использовать RxJS
4. Для верстки компонентов и общего лаяута страницы можно использовать CSS Framework (на свой выбор)
5. Ипользовать mock данных из предоставленных JSON
6. Избегать в типизации ANY
7. Использовать Github/GitLab для хранения проекта
8. Тестовое задание состоит из 3 страниц:

Страница #1 Login

1. Форма состоит из 2 полей: EMAIL, PASSOWRD
2. Сделать проверки на пустые поля и на корректность EMAIL
3. Сделать проверку EMAIL, PASSOWRD на существование в системе (хардкодно):
 3.1 EMAIL: admin@admin.com, PASSWORD: admin
 3.2 Если проходит, переход на страницу Publication
 3.3 Если не проходит, показать ошибку

Страница #2 Publication

1. Сделать таблицу публикаций
2. Для получения значений использовать Publication.values.json
3. Для получения метаданных использовать Publication.metadata.json
4. Сопоставить данные с 2х json файлов можно по полю fieldId
5. Таблица должна быть динамической:
 5.1 По полю name взять названия для колонок
 5.2 По полю isHidden должны показываться/скрываться столбцы
 5.3 По полю priority столбцы дожны менять свой порядок
 5.4 По клику на строку открывается PublicationEdit - модальное окно справа (аля сайдбар на фикседе)
 	5.4.1 Модальное окно в виде подстраницы, имеется ввиду путь будет /publication/{id}
 	5.4.2 ID можно захардкодить (к примеру значение 1)

Страница #3 PublicationEdit

1. Форма редактирования публикации
3. Для получения значений использовать PublicationEdit.values.json
4. Для получения метаданных использовать PublicationEdit.metadata.json
5. Валидацию полей можно определить по полю isMandatory (проверка на заполнение)
6. Определить отображение поля можно по полю isHidden
7. Определить порядок полей можно по полю priority
8. Определить редактируемое поле можно по полю isReadOnly
9. По клику на SAVE сохранить форму в формате (PublicationEditSave.json пример, как должны выглядеть данные для отправки)
10. данные отобразить в сайдбаре под формой <pre>{{formValues | json}}</pre>
