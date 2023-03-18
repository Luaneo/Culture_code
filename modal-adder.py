author = input('Имя автора: ')
mural_name = input('Назвыние мурала: ')
address = input('Адрес (без "ул."): ')
mural_id = input('ID: ')
par1 = input('Первый абзац: ')
par2 = input('Второй абзац: ')
par3 = input('Третий абзац: ')
with open('Murals/index.html', 'a', encoding='utf-8') as html:
    html.write(f"""    <div class="modal" id="{mural_id}">
        <h3>ул. {address}</h3>
        <article>
            <header>
                <h1>«{mural_name}»</h1>
                <h2>{author}</h2>
            </header>
            <p>
                {par1}
            </p>
            <p>
                {par2}
            </p>
            <p>
                {par3}
            </p>
        </article>
        <img src="../images/Murals/{mural_id}-main.png" alt="ИЗОБРАЖЕНИЕ МУРАЛА НА КОЛХОЗНОЙ 4" class="img-main" />
        <button data-close-button class="close-button">
            ЗАКРЫТЬ &times;
        </button>
        <img src="../images/Murals/{mural_id}-aside.png" alt="ИЗОБРАЖЕНИЕ МУРАЛА НА КОЛХОЗНОЙ 4" class="img-aside" />
    </div>
""")
with open('assets/murals.scss', 'a') as scss:
    scss.write(f"""
[data-modal-target="#{mural_id}"] {{
    top: 10vw;
    left: 10vw;
}}
""")
