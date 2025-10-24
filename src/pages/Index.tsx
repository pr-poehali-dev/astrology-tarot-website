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
    <div className="min-h-screen modern-gradient">
      <header className="border-b border-border bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">Астролог & Таролог</h1>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Услуги
            </a>
            <a href="#horoscope" className="text-muted-foreground hover:text-foreground transition-colors">
              Гороскоп
            </a>
            <a href="#booking" className="text-muted-foreground hover:text-foreground transition-colors">
              Запись
            </a>
          </div>
        </nav>
      </header>

      <main>

        <section className="container mx-auto px-4 py-24 text-center">
          <div className="max-w-5xl mx-auto space-y-10 fade-in-up">
            <h2 className="text-7xl md:text-8xl font-bold leading-[1.1] tracking-tight">
              Откройте тайны
              <br />
              вашей судьбы
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Персональные астрологические консультации и таро-расклады для тех, кто ищет ответы в звёздах
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 text-base font-medium">
                Записаться на консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-border hover:bg-secondary px-8 h-12 text-base font-medium">
                Узнать больше
              </Button>
            </div>
            <div className="mt-16 pt-8">
              <img
                src="https://cdn.poehali.dev/projects/1135127a-a339-448f-bde7-767d994e9d13/files/d8b5cbca-75ee-4136-b46f-940988ae0c81.jpg"
                alt="Мистические карты таро"
                className="rounded-2xl shadow-sm mx-auto max-w-3xl w-full border border-border"
              />
            </div>
          </div>
        </section>

        <section id="services" className="container mx-auto px-4 py-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 tracking-tight">
              Мои услуги
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="bg-white border border-border hover:border-primary transition-all duration-200 hover:shadow-lg group"
                >
                  <CardHeader className="space-y-4">
                    <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Icon name={service.icon as any} size={28} className="text-foreground group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <CardTitle className="text-2xl font-semibold">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-baseline border-t border-border pt-4">
                      <span className="text-sm text-muted-foreground">Цена</span>
                      <span className="text-3xl font-bold">{service.price}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Длительность</span>
                      <span className="font-medium">{service.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="horoscope" className="container mx-auto px-4 py-24 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 tracking-tight">
              Гороскоп на сегодня
            </h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">
              Выберите свой знак зодиака и узнайте, что готовят вам звёзды
            </p>

            <Tabs value={selectedSign} onValueChange={setSelectedSign} className="w-full">
              <TabsList className="grid grid-cols-6 md:grid-cols-12 gap-3 h-auto bg-white p-6 rounded-xl border border-border shadow-sm">
                {zodiacSigns.map((sign) => (
                  <TabsTrigger
                    key={sign.name}
                    value={sign.name}
                    className="text-2xl p-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all hover:bg-secondary"
                  >
                    {sign.icon}
                  </TabsTrigger>
                ))}
              </TabsList>

              {zodiacSigns.map((sign) => (
                <TabsContent key={sign.name} value={sign.name} className="mt-10">
                  <Card className="bg-white border border-border shadow-sm">
                    <CardHeader className="pb-6">
                      <div className="flex items-center gap-6">
                        <div className="text-7xl">{sign.icon}</div>
                        <div>
                          <CardTitle className="text-4xl font-bold mb-2">{sign.name}</CardTitle>
                          <CardDescription className="text-base text-muted-foreground">
                            {sign.dates} • {sign.element}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-lg leading-relaxed text-foreground">{horoscopes[sign.name as keyof typeof horoscopes]}</p>
                      <div className="flex gap-3 pt-2">
                        <Button className="bg-primary hover:bg-primary/90 font-medium">
                          Полный прогноз
                        </Button>
                        <Button variant="outline" className="border-border hover:bg-secondary font-medium">
                          Персональная консультация
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>

            <div className="mt-16">
              <img
                src="https://cdn.poehali.dev/projects/1135127a-a339-448f-bde7-767d994e9d13/files/b721db90-ab6d-488d-bdd2-35691ea344fa.jpg"
                alt="Колесо зодиака"
                className="rounded-2xl shadow-sm mx-auto max-w-3xl w-full border border-border"
              />
            </div>
          </div>
        </section>

        <section id="booking" className="container mx-auto px-4 py-24 bg-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 tracking-tight">
              Запись на консультацию
            </h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">
              Заполните форму, и я свяжусь с вами для подбора удобного времени
            </p>

            <Card className="bg-white border border-border shadow-sm">
              <CardContent className="pt-8 px-8 pb-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">Ваше имя</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Как к вам обращаться?"
                      required
                      className="h-11 border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      className="h-11 border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (999) 123-45-67"
                      required
                      className="h-11 border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-sm font-medium">Интересующая услуга</Label>
                    <Input
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      placeholder="Например: Натальная карта"
                      required
                      className="h-11 border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">Дополнительная информация</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Расскажите о ваших вопросах и пожеланиях..."
                      rows={5}
                      className="border-border resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 font-medium">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <footer className="border-t border-border bg-white py-12 mt-20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Астролог & Таролог • Все консультации конфиденциальны
            </p>
            <div className="flex justify-center gap-6 mt-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Send" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}