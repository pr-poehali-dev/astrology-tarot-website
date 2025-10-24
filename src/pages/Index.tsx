import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const zodiacSigns = [
  { name: 'Овен', icon: '♈', dates: '21.03 - 19.04', element: 'Огонь' },
  { name: 'Телец', icon: '♉', dates: '20.04 - 20.05', element: 'Земля' },
  { name: 'Близнецы', icon: '♊', dates: '21.05 - 20.06', element: 'Воздух' },
  { name: 'Рак', icon: '♋', dates: '21.06 - 22.07', element: 'Вода' },
  { name: 'Лев', icon: '♌', dates: '23.07 - 22.08', element: 'Огонь' },
  { name: 'Дева', icon: '♍', dates: '23.08 - 22.09', element: 'Земля' },
  { name: 'Весы', icon: '♎', dates: '23.09 - 22.10', element: 'Воздух' },
  { name: 'Скорпион', icon: '♏', dates: '23.10 - 21.11', element: 'Вода' },
  { name: 'Стрелец', icon: '♐', dates: '22.11 - 21.12', element: 'Огонь' },
  { name: 'Козерог', icon: '♑', dates: '22.12 - 19.01', element: 'Земля' },
  { name: 'Водолей', icon: '♒', dates: '20.01 - 18.02', element: 'Воздух' },
  { name: 'Рыбы', icon: '♓', dates: '19.02 - 20.03', element: 'Вода' },
];

const services = [
  {
    title: 'Натальная карта',
    description: 'Полный разбор вашей личности по звёздам',
    price: '5000 ₽',
    duration: '90 минут',
    icon: 'Star',
  },
  {
    title: 'Таро-расклад',
    description: 'Ответы на важные вопросы через карты',
    price: '3000 ₽',
    duration: '60 минут',
    icon: 'Sparkles',
  },
  {
    title: 'Прогноз на год',
    description: 'Астрологический прогноз на 12 месяцев',
    price: '7000 ₽',
    duration: '120 минут',
    icon: 'Calendar',
  },
  {
    title: 'Совместимость',
    description: 'Анализ отношений и синастрия',
    price: '4500 ₽',
    duration: '75 минут',
    icon: 'Heart',
  },
];

const horoscopes = {
  'Овен': 'Сегодня звёзды благоволят новым начинаниям. Меркурий в вашем секторе карьеры открывает двери для профессионального роста.',
  'Телец': 'День благоприятен для финансовых решений. Венера усиливает вашу интуицию в денежных вопросах.',
  'Близнецы': 'Коммуникация на высоте. Отличное время для важных переговоров и новых знакомств.',
  'Рак': 'Луна в вашем знаке усиливает эмоциональную чувствительность. Прислушайтесь к внутреннему голосу.',
  'Лев': 'Солнце дарует вам уверенность и харизму. Идеальный день для публичных выступлений.',
  'Дева': 'Обратите внимание на детали. Ваша педантичность сегодня станет ключом к успеху.',
  'Весы': 'Гармония в отношениях достигает пика. Время укрепить партнёрские связи.',
  'Скорпион': 'Марс в вашем секторе усиливает решительность. Смело действуйте к своим целям.',
  'Стрелец': 'Юпитер расширяет горизонты. Отличное время для путешествий и обучения.',
  'Козерог': 'Сатурн вознаграждает за терпение и труд. Ваши усилия скоро принесут плоды.',
  'Водолей': 'Уран приносит неожиданные возможности. Будьте готовы к приятным сюрпризам.',
  'Рыбы': 'Нептун усиливает творческую энергию. Идеальный день для креативных проектов.',
};

export default function Index() {
  const [selectedSign, setSelectedSign] = useState('Овен');
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Я свяжусь с вами в течение 24 часов.",
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <div className="min-h-screen cosmic-gradient relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <header className="container mx-auto px-4 py-8">
          <nav className="flex justify-between items-center backdrop-blur-sm bg-card/30 rounded-2xl p-4 border border-primary/20">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ✨ Астролог & Таролог
            </h1>
            <div className="flex gap-6">
              <a href="#services" className="text-foreground/80 hover:text-accent transition-colors">
                Услуги
              </a>
              <a href="#horoscope" className="text-foreground/80 hover:text-accent transition-colors">
                Гороскоп
              </a>
              <a href="#booking" className="text-foreground/80 hover:text-accent transition-colors">
                Запись
              </a>
            </div>
          </nav>
        </header>

        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-bold leading-tight">
              Откройте тайны
              <br />
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                вашей судьбы
              </span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Персональные астрологические консультации и таро-расклады для тех, кто ищет ответы в звёздах
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
                <Icon name="Star" className="mr-2" size={20} />
                Записаться на консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent/10 text-lg px-8 py-6">
                Узнать больше
              </Button>
            </div>
            <div className="mt-12">
              <img
                src="https://cdn.poehali.dev/projects/1135127a-a339-448f-bde7-767d994e9d13/files/d8b5cbca-75ee-4136-b46f-940988ae0c81.jpg"
                alt="Мистические карты таро"
                className="rounded-3xl shadow-2xl mx-auto max-w-2xl w-full border-2 border-primary/30"
              />
            </div>
          </div>
        </section>

        <section id="services" className="container mx-auto px-4 py-20">
          <h2 className="text-5xl font-bold text-center mb-16">
            Мои <span className="text-accent">услуги</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={32} className="text-accent" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-foreground/70">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/60">Цена:</span>
                      <span className="text-2xl font-bold text-accent">{service.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/60">Длительность:</span>
                      <span className="text-foreground/90">{service.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="horoscope" className="container mx-auto px-4 py-20">
          <h2 className="text-5xl font-bold text-center mb-4">
            Гороскоп на <span className="text-accent">сегодня</span>
          </h2>
          <p className="text-center text-foreground/70 mb-12 text-lg">
            Выберите свой знак зодиака и узнайте, что готовят вам звёзды
          </p>

          <div className="max-w-6xl mx-auto">
            <Tabs value={selectedSign} onValueChange={setSelectedSign} className="w-full">
              <TabsList className="grid grid-cols-6 md:grid-cols-12 gap-2 h-auto bg-card/30 backdrop-blur-sm p-4 rounded-2xl">
                {zodiacSigns.map((sign) => (
                  <TabsTrigger
                    key={sign.name}
                    value={sign.name}
                    className="text-3xl p-4 data-[state=active]:bg-primary data-[state=active]:text-white rounded-xl transition-all hover:scale-110"
                  >
                    {sign.icon}
                  </TabsTrigger>
                ))}
              </TabsList>

              {zodiacSigns.map((sign) => (
                <TabsContent key={sign.name} value={sign.name} className="mt-8">
                  <Card className="bg-card/50 backdrop-blur-sm border-primary/30">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-6xl">{sign.icon}</div>
                        <div>
                          <CardTitle className="text-4xl">{sign.name}</CardTitle>
                          <CardDescription className="text-lg text-foreground/70">
                            {sign.dates} • {sign.element}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg leading-relaxed text-foreground/90">{horoscopes[sign.name as keyof typeof horoscopes]}</p>
                      <div className="mt-6 flex gap-3">
                        <Button className="bg-primary hover:bg-primary/90">
                          <Icon name="Star" className="mr-2" size={18} />
                          Полный прогноз
                        </Button>
                        <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                          Персональная консультация
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>

            <div className="mt-12">
              <img
                src="https://cdn.poehali.dev/projects/1135127a-a339-448f-bde7-767d994e9d13/files/b721db90-ab6d-488d-bdd2-35691ea344fa.jpg"
                alt="Колесо зодиака"
                className="rounded-3xl shadow-2xl mx-auto max-w-2xl w-full border-2 border-primary/30"
              />
            </div>
          </div>
        </section>

        <section id="booking" className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-4">
              Запись на <span className="text-accent">консультацию</span>
            </h2>
            <p className="text-center text-foreground/70 mb-12 text-lg">
              Заполните форму, и я свяжусь с вами для подбора удобного времени
            </p>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/30">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-lg">Ваше имя</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Как к вам обращаться?"
                      required
                      className="bg-background/50 border-primary/30 text-lg py-6"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      className="bg-background/50 border-primary/30 text-lg py-6"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-lg">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (999) 123-45-67"
                      required
                      className="bg-background/50 border-primary/30 text-lg py-6"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-lg">Интересующая услуга</Label>
                    <Input
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      placeholder="Например: Натальная карта"
                      required
                      className="bg-background/50 border-primary/30 text-lg py-6"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-lg">Дополнительная информация</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Расскажите о ваших вопросах и пожеланиях..."
                      rows={5}
                      className="bg-background/50 border-primary/30 text-lg resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <footer className="container mx-auto px-4 py-12 text-center border-t border-primary/20 mt-20">
          <p className="text-foreground/60">
            © 2024 Астролог & Таролог • Все консультации конфиденциальны
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
              <Icon name="Send" size={24} />
            </a>
            <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
              <Icon name="Mail" size={24} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}