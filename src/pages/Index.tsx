import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-beauty-white">
      {/* Header */}
      <header className="bg-beauty-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Icon
                name="Scissors"
                className="text-beauty-pink mr-2"
                size={32}
              />
              <h1 className="text-2xl font-bold text-beauty-gray">
                BEAUTY SALON
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-beauty-gray hover:text-beauty-pink transition-colors"
              >
                Главная
              </a>
              <a
                href="#about"
                className="text-beauty-gray hover:text-beauty-pink transition-colors"
              >
                О нас
              </a>
              <a
                href="#services"
                className="text-beauty-gray hover:text-beauty-pink transition-colors"
              >
                Прайс
              </a>
              <a
                href="#gallery"
                className="text-beauty-gray hover:text-beauty-pink transition-colors"
              >
                Галерея
              </a>
              <a
                href="#booking"
                className="text-beauty-gray hover:text-beauty-pink transition-colors"
              >
                Запись
              </a>
            </nav>
            <Button className="bg-beauty-pink hover:bg-beauty-pink/90">
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[80vh] flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-beauty-light to-beauty-pink/10"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1
            className="text-5xl md:text-7xl font-bold text-beauty-gray mb-6"
            style={{ fontFamily: "Playfair Display" }}
          >
            Ваша красота — наша страсть
          </h1>
          <p className="text-xl text-beauty-gray/80 mb-8 max-w-2xl mx-auto">
            Профессиональные парикмахерские услуги в атмосфере роскоши и
            комфорта. Стрижки, окрашивание и укладки от лучших мастеров города.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-beauty-pink hover:bg-beauty-pink/90 px-8 py-3"
            >
              Записаться онлайн
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-beauty-gray text-beauty-gray px-8 py-3"
            >
              Наши работы
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-beauty-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-4xl font-bold text-beauty-gray mb-6"
                style={{ fontFamily: "Playfair Display" }}
              >
                О нашем салоне
              </h2>
              <p className="text-beauty-gray/80 mb-6 text-lg leading-relaxed">
                Уже более 10 лет мы создаем неповторимые образы для наших
                клиентов. Наша команда — это профессионалы с международными
                сертификатами, которые следят за последними тенденциями в мире
                красоты.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-beauty-pink mb-2">
                    2000+
                  </div>
                  <div className="text-beauty-gray/70">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-beauty-pink mb-2">
                    10+
                  </div>
                  <div className="text-beauty-gray/70">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/8813d3a8-7c48-421c-853d-9cf924ec1724.jpg"
                alt="Интерьер салона красоты"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-beauty-gray mb-4"
              style={{ fontFamily: "Playfair Display" }}
            >
              Наши услуги
            </h2>
            <p className="text-beauty-gray/80 text-lg">
              Профессиональные парикмахерские услуги для любого случая
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-beauty-gray/10">
              <CardHeader className="text-center">
                <Icon
                  name="Scissors"
                  className="text-beauty-pink mx-auto mb-4"
                  size={48}
                />
                <CardTitle className="text-beauty-gray">Стрижки</CardTitle>
                <CardDescription>
                  Мужские и женские стрижки любой сложности
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Женская стрижка</span>
                  <span className="font-semibold text-beauty-pink">
                    от 2000₽
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Мужская стрижка</span>
                  <span className="font-semibold text-beauty-pink">
                    от 1500₽
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Детская стрижка</span>
                  <span className="font-semibold text-beauty-pink">
                    от 1000₽
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-beauty-gray/10">
              <CardHeader className="text-center">
                <Icon
                  name="Paintbrush"
                  className="text-beauty-pink mx-auto mb-4"
                  size={48}
                />
                <CardTitle className="text-beauty-gray">Окрашивание</CardTitle>
                <CardDescription>
                  Современные техники окрашивания волос
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Тонирование</span>
                  <span className="font-semibold text-beauty-pink">
                    от 3000₽
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Мелирование</span>
                  <span className="font-semibold text-beauty-pink">
                    от 4500₽
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Балаяж</span>
                  <span className="font-semibold text-beauty-pink">
                    от 6000₽
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-beauty-gray/10">
              <CardHeader className="text-center">
                <Icon
                  name="Sparkles"
                  className="text-beauty-pink mx-auto mb-4"
                  size={48}
                />
                <CardTitle className="text-beauty-gray">Укладки</CardTitle>
                <CardDescription>
                  Праздничные и повседневные укладки
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Повседневная укладка</span>
                  <span className="font-semibold text-beauty-pink">
                    от 1500₽
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Праздничная укладка</span>
                  <span className="font-semibold text-beauty-pink">
                    от 2500₽
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Свадебная укладка</span>
                  <span className="font-semibold text-beauty-pink">
                    от 4000₽
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-beauty-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-beauty-gray mb-4"
              style={{ fontFamily: "Playfair Display" }}
            >
              Галерея работ
            </h2>
            <p className="text-beauty-gray/80 text-lg">
              Примеры наших лучших работ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/img/1818379d-6bba-4800-b77e-ecc5aa998cb2.jpg"
                  alt="Работа стилиста"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/img/bd78e7f4-9d14-48ed-9797-02c54f46b7f3.jpg"
                  alt="Портфолио причесок"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/img/8813d3a8-7c48-421c-853d-9cf924ec1724.jpg"
                  alt="Интерьер салона"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-beauty-gray mb-4"
              style={{ fontFamily: "Playfair Display" }}
            >
              Онлайн запись
            </h2>
            <p className="text-beauty-gray/80 text-lg">
              Выберите удобное время для посещения
            </p>
          </div>

          <Card className="shadow-xl border-beauty-gray/10">
            <CardHeader>
              <CardTitle className="text-beauty-gray text-center">
                Записаться на услугу
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (999) 123-45-67" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="service">Услуга</Label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-beauty-pink">
                    <option>Выберите услугу</option>
                    <option>Женская стрижка</option>
                    <option>Мужская стрижка</option>
                    <option>Окрашивание</option>
                    <option>Укладка</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Дата и время</Label>
                  <Input id="date" type="datetime-local" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Комментарий</Label>
                <Textarea
                  id="message"
                  placeholder="Дополнительные пожелания..."
                />
              </div>

              <Button className="w-full bg-beauty-pink hover:bg-beauty-pink/90 py-3">
                Записаться
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-beauty-gray text-beauty-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon
                  name="Scissors"
                  className="text-beauty-pink mr-2"
                  size={24}
                />
                <h3 className="text-xl font-bold">BEAUTY SALON</h3>
              </div>
              <p className="text-gray-300">
                Профессиональные парикмахерские услуги с индивидуальным подходом
                к каждому клиенту.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Icon name="MapPin" className="mr-2" size={16} />
                  <span>г. Москва, ул. Примерная, 123</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" className="mr-2" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" className="mr-2" size={16} />
                  <span>Пн-Вс: 9:00 - 21:00</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-beauty-pink transition-colors"
                >
                  <Icon name="Instagram" size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-beauty-pink transition-colors"
                >
                  <Icon name="Facebook" size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-beauty-pink transition-colors"
                >
                  <Icon name="MessageCircle" size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Beauty Salon. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
