# Проект LANWU

Это веб-проект для компании LANWU, разработанный с использованием **Pug**, **Tailwind CSS** и **BrowserSync**. Структура проекта оптимизирована для удобной разработки и включает автообновление, генерацию статических файлов и деплой на GitHub Pages.

## Содержание

- [Настройка проекта](#настройка-проекта)
- [Разработка](#разработка)
- [Сборка](#сборка)
- [Технологии](#технологии)
- [Структура проекта](#структура-проекта)

## Настройка проекта

### 1. Клонируйте репозиторий:

```bash
git clone https://github.com/baujaasd/lanwu.git
cd lanwu
```

### 2. Установите зависимости:
# Убедитесь, что у вас установлен Node.js. Выполните следующую команду для установки необходимых пакетов:

```bash
npm install
```

## Разработка

### 1. Запуск сервера разработки:
Чтобы запустить сервер разработки с автоматической перезагрузкой для Pug и Tailwind CSS:

```bash
npm run dev
```

### Этот скрипт:
Следит за изменениями в Pug-файлах и компилирует их в HTML в папке dist.
Следит за изменениями в Tailwind CSS и пересобирает файл tailwind.css в папке dist.
Запускает BrowserSync, который автоматически обновляет страницу в браузере при изменениях.

### 2. Отслеживание только Tailwind CSS:
Если нужно следить только за изменениями в Tailwind CSS:

```bash
npm run watch:css
```

## Сборка

Чтобы собрать проект для продакшн:

```bash
npm run build
npm run build:css
```

### Это команды:
Компилируют Pug-шаблоны в статические HTML-файлы в папке dist/.
Компилируют и минифицируют Tailwind CSS в файл dist/css/tailwind.css.

## Технологии

Pug: Шаблонизатор для упрощения написания HTML.
Tailwind CSS: CSS-фреймворк с утилитарным подходом для быстрого создания кастомных дизайнов.
PostCSS и Autoprefixer: Инструменты для обработки CSS и обеспечения поддержки разных браузеров.
BrowserSync: Автообновление и синхронизация браузера для удобной разработки.
GitHub Pages: Для деплоя и хостинга статического сайта.

## Структура проекта

```bash
lanwu/
├── dist/                   # Скомпилированные HTML и CSS файлы для продакшн
│   ├── index.html
│   ├── css/
│   │   └── tailwind.css
├── src/                    # Исходные файлы
│   ├── css/
│   │   └── tailwind.css    # Входной CSS файл для Tailwind
│   ├── pug/
│   │   └── *.pug           # Pug-шаблоны
│   └── media/              # Статические файлы (изображения и т.д.)
├── tailwind.config.js       # Конфигурация Tailwind CSS
├── package.json            # Зависимости и скрипты NPM
└── README.md               # Документация
```

