<template>
    <div class="container">
        <nav>
            <div class="full-nav">
                <ul>
                    <div class="nav-right">
                        <li>
                            <a href="#contact">Kontak</a>
                        </li>
                        <li>
                            <a href="#order">Pesan</a>
                        </li>
                        <li>
                            <a href="#menu">Menu</a>
                        </li>
                    </div>
                    <div class="nav-left">
                        <li>
                            <a href="#Coffee-Time">Cozi</a>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>

        <section id="menu">
            <div class="menu-head">
                <br>
                <div class="fas fa-coffee"></div>
                <h2 class="items">Menu Biji Kopi Cozi</h2>
                <p class="itemsp">Pilih dari seleksi biji kopi kami yang lezat dan nikmat</p>
            </div>
        </section>

        <section id="order">
            <form>
                <div class="beans">
                    <ul class="coffeebeans">
                        <li>
                            <span class="type">Arabika</span>
                            <span class="value">Rp.240.000/8oz Paket</span>
                            <p class="desc">Rasa kaya, coklat, buah. Yang paling populer kami.</p>
                            <input type="number" name="quantity" min="1" max="10" id="number"
                                placeholder="Pilih Jumlah" />
                            <button class="order" type="button">Tambahkan ke Pesanan</button>
                        </li>
                        <li>
                            <span class="type">Robusta</span>
                            <span class="value">Rp.192.000/8oz Paket</span>
                            <p class="desc">Pahit, rendah asam, sempurna untuk espresso.</p>
                            <input type="number" name="quantity" min="1" max="10" id="number"
                                placeholder="Pilih Jumlah" />
                            <button class="order" type="button">Tambahkan ke Pesanan</button>
                        </li>
                        <li>
                            <span class="type">Liberika</span>
                            <span class="value">Rp.320.000/8oz Paket</span>
                            <p class="desc">Aroma bunga, buah dengan rasa asap yang penuh.</p>
                            <input type="number" name="quantity" min="1" max="10" id="number"
                                placeholder="Pilih Jumlah" />
                            <button class="order" type="button">Tambahkan ke Pesanan</button>
                        </li>
                        <li>
                            <span class="type">Excelsa</span>
                            <span class="value">275.000/8oz Paket</span>
                            <p class="desc">Rasa buah, gelap, kadar kafein rendah.</p>
                            <input type="number" name="quantity" min="1" max="10" id="number"
                                placeholder="Pilih Jumlah" />
                            <button class="order" type="button">Tambahkan ke Pesanan</button>
                        </li>
                    </ul>
                </div>
                <div class="complete">
                    <input class="submit" type="submit" value="Kirim Pesanan" />
                </div>
            </form>
        </section>
        <section id="contact">
            <div class="contact-header">
                <h2 class="get-in-touch">Hubungi kami!</h2>
            </div>
            <div class="contact-links">
                <a href="mailto:mhmmdazizi18@gmail.com" class="link"><i class="fas fa-at"></i> Kirim email</a>
                <a href="tel:085264919989" class="link"><i class="fas fa-mobile-alt"></i> Hubungi kami</a>
            </div>
        </section>
        <footer>
        &copy; 2024 Design.by zizi
    </footer>
    </div>
</template>