import { AnalyticsDashboard } from "@/components/AnalyticsDashboard";

const Index = () => {
  // Sample data - in production this would come from your n8n workflow
  const analysisData = [
    {
      "competitor_name": "Komis Auto",
      "total_ads": 2,
      "ads_with_analysis": 2,
      "ads": [
        {
          "competitor_name": "Komis Auto",
          "ad_data": {
            "platforms": [
              "FACEBOOK",
              "INSTAGRAM"
            ],
            "page_profile_uri": "https://www.facebook.com/KomisAutoKm/",
            "page_profile_picture_url": "https://scontent.ffcm1-1.fna.fbcdn.net/v/t39.35426-6/540457163_799535709422429_463788147379261759_n.jpg?stp=dst-jpg_s60x60_tt6&_nc_cat=101&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=P8jj14f5hPIQ7kNvwGtYlFo&_nc_oc=AdmRst9jA9BHuR8TKFqJmx4MIvaqjWAmhhZWIZWqSDmlcig06_EKdIoNs0ztAa0cYN4&_nc_zt=14&_nc_ht=scontent.ffcm1-1.fna&_nc_gid=fI1O0tDqp2UWthxiGbVaig&oh=00_AfaWjvVt8QYNFfTnFS_wRFJbDaMPSooJcPArdoZwtdbXOg&oe=68C8AB13",
            "ad_text": "Якщо ти вже вирішивши брати авто в лізинг – кращих умів, ніж у нас, ти не знайдеш!\n\nЛише 7% першого внеску! Таких умов немає ніде в Україні!\n\nЦя пропозиція без обмежень.\nОфіційно працевлаштовані, неофіційно працевлаштовані, військові.\n\nМи зробили так, щоб лізинг був реально доступним кожному, хто мріє про власне авто.\n\nЗалишай заявку і наш менеджер зв'яжеться з тобою вже сьогодні!",
            "videos": [
              {
                "video_preview_image_url": "https://scontent.ffcm1-1.fna.fbcdn.net/v/t39.35426-6/541156004_799064046616587_767013248239230413_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=yMDUWaaRqRYQ7kNvwFX54m6&_nc_oc=AdlvPtHZ0iA2Uf-WF3lM-CGVjRGlDEZOi-uLsfWBvzxY3JepnsGaUnmHeVd9xUcRdtk&_nc_zt=14&_nc_ht=scontent.ffcm1-1.fna&_nc_gid=fI1O0tDqp2UWthxiGbVaig&oh=00_AfYyYCVdddjDgOTbx6qYSTyyMR4M2A9c4utvJQmXXSaL3g&oe=68C8B99C",
                "video_sd_url": "https://video.ffcm1-1.fna.fbcdn.net/o1/v/t2/f2/m366/AQMqnbJgREUIRDOJlgFl6GxwlCTPTJkg88pq52aQtKFQCmCHN96wK3uhwosOaRGoaD9qH2vhWLnv3nUuBHyip2TTVe5fnbgH4mvysxLGjw.mp4?_nc_cat=102&_nc_oc=AdkAZB23M7rk0KcNtB-o3jezV9sXTSj9arzxqM5E-hWEECztBtuDkHKqrSSsSMR_TCU&_nc_sid=8bf8fe&_nc_ht=video.ffcm1-1.fna.fbcdn.net&_nc_ohc=ZIULPALVWzEQ7kNvwGKmZ3X&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5WSV9VU0VDQVNFX1BST0RVQ1RfVFlQRS4uQzMuMzYwLnN2ZV9zZCIsInhwdl9hc3NldF9pZCI6ODE5NzU5MTY0MzM5NjY2LCJ2aV91c2VjYXNlX2lkIjoxMDc5OSwiZHVyYXRpb25fcyI6MjMsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&_nc_gid=fI1O0tDqp2UWthxiGbVaig&_nc_zt=28&oh=00_Afaw5sZ3jpG70jrNulXNqlru4hOWV1X0aZFWN7j5IPNUdQ&oe=68C8A0B8"
              }
            ],
            "ad_started": "Sep 4, 2025"
          },
          "ai_analysis": {
            "full_analysis": "Анализ рекламного объявления Komis Auto:\n\n1) Копирайтинг\n\nОсновное предложение: лизинг автомобилей с минимальным первоначальным взносом 7%.\n\nСильные стороны:\n- Конкретная цифра (7%) создает якорь\n- Широкая аудитория (все категории работников)\n- Четкий призыв к действию\n- Эмоциональный hook о мечте об авто\n\nСлабые стороны:\n- Смешение языков (украинский/русский) снижает профессионализм\n- Отсутствие конкретных условий (процентная ставка, срок)\n- Нет социальных доказательств\n- Грамматические ошибки\n\n2) Маркетинг\n\nТип предложения: Стимулирующий оффер с льготными условиями\nСтадия воронки: Верхняя часть (лидогенерация)\nОригинальность: Средняя, типичные формулировки для финансовых услуг\n\n3) Психология\n\nДрайверы: Мечта о собственном авто, доступность для всех\nСтруктура: Неполная AIDA - есть внимание и действие, но слабая мотивация\nПриемы влияния: Якорение через цифры, слабый FOMO\n\n4) Рекомендации\n\n- Привести к единому языку\n- Добавить конкретные условия и примеры расчетов\n- Включить социальные доказательства\n- Усилить уникальное торговое предложение"
          }
        },
        {
          "competitor_name": "Komis Auto",
          "ad_data": {
            "platforms": [
              "INSTAGRAM"
            ],
            "page_profile_uri": "https://www.facebook.com/KomisAutoKm/",
            "page_profile_picture_url": "https://scontent.ffcm1-1.fna.fbcdn.net/v/t39.35426-6/487207765_1192158062327674_3845582136647343555_n.jpg?stp=dst-jpg_s60x60_tt6&_nc_cat=106&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=-psqIzG9zNIQ7kNvwE6nSbv&_nc_oc=Adm9nymqM2mWB2WEwopMpZEdepeZfx5goQ_-wCFXVeX78rADRpMMvjVBkf0g4Kkxe2o&_nc_zt=14&_nc_ht=scontent.ffcm1-1.fna&_nc_gid=fI1O0tDqp2UWthxiGbVaig&oh=00_AfZIWfv_fgBuZeSdw7CrwXsoAc7ISwn-l6u8MondUyoEKg&oe=68C8CE3F",
            "ad_text": "Цікавить авто у лізинг? Ставте + під цим відео або надсилайте свій телефон📞 у direct/приватні повідомлення та наш менеджер звʼяжеться з вами вже СЬОГОДНІ💌",
            "videos": [
              {
                "video_preview_image_url": "https://scontent.ffcm1-1.fna.fbcdn.net/v/t39.35426-6/487207768_1020354163329850_2522499856155939731_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=67hOJrb2aUMQ7kNvwGzmBhe&_nc_oc=AdmBeeDdeN2zxs5EI8Pno0vrW7GxgWFVQlD042nVridwThMsLzQUljeV6ij7W5oGwLs&_nc_zt=14&_nc_ht=scontent.ffcm1-1.fna&_nc_gid=fI1O0tDqp2UWthxiGbVaig&oh=00_AfbYphMtkai16dozbU0pmbQkXupcC4sIJ3op_UIwy6IWbw&oe=68C8A2CF",
                "video_sd_url": "https://video.ffcm1-1.fna.fbcdn.net/v/t42.1790-2/486827690_9858793674133151_8524769602189915148_n.mp4?_nc_cat=111&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=-Dou_fTA4DoQ7kNvwFNe-Kt&_nc_oc=AdnwGnKa5EMYxhyFaQf7SsCYuEjNA7bGqCP0kWOuk7q6-gIcE_ig7QByLKAAm5kjeNE&_nc_zt=28&_nc_ht=video.ffcm1-1.fna&_nc_gid=fI1O0tDqp2UWthxiGbVaig&oh=00_AfbQaej_REeQZSsUspjxHCP4mag_WNZwpXXeaAm8GvxAuA&oe=68C8BA3A"
              }
            ],
            "ad_started": "Mar 27, 2025"
          },
          "ai_analysis": {
            "full_analysis": "Анализ второго объявления Komis Auto:\n\n1) Копирайтинг\n\nПодход: Простая лидогенерация через взаимодействие\n\nСильные стороны:\n- Понятный призыв к действию\n- Низкий барьер для начала взаимодействия\n- Обещание быстрого контакта\n\nСлабые стороны:\n- Отсутствие конкретного предложения\n- Нет выгод или условий\n- Очень общий подход\n- Смешение языков в тексте\n\n2) Маркетинг\n\nТип предложения: Лидогенерация без конкретного оффера\nСтадия воронки: Верхняя часть, сбор контактов\nОригинальность: Низкая, стандартный подход\n\n3) Психология\n\nДрайверы: Любопытство, низкий порог входа\nСтруктура: Минималистичная, фокус на быстром контакте\nПриемы влияния: Срочность (сегодня), простота действия\n\n4) Рекомендации\n\n- Добавить конкретное предложение\n- Указать выгоды лизинга\n- Включить социальные доказательства\n- Улучшить качество текста\n- Добавить уникальное торговое предложение"
          }
        }
      ]
    },
    {
      "competitor_name": "Komis Auto Вінниця",
      "total_ads": 2,
      "ads_with_analysis": 2,
      "ads": [
        {
          "competitor_name": "Komis Auto Вінниця",
          "ad_data": {
            "platforms": [
              "FACEBOOK"
            ],
            "page_profile_uri": "https://www.facebook.com/KomisAutoVn/",
            "page_profile_picture_url": "https://scontent.ffcm1-1.fna.fbcdn.net/v/t39.35426-6/513852779_702964735840719_1352380118753613592_n.jpg?stp=dst-jpg_s60x60_tt6&_nc_cat=100&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=HenTXGV3UaMQ7kNvwHIprjp&_nc_oc=Adn1m3-27BFQ0LJ0RMJWeSruubEEKP9ayJwX49G1TnqDh4s4RHphRNerAcQ4X9ECU-s&_nc_zt=14&_nc_ht=scontent.ffcm1-1.fna&_nc_gid=fI1O0tDqp2UWthxiGbVaig&oh=00_AfYo84lPb7etaFPaWtz4hOzeAgTMDOwKVNVe3fp6YMs-SQ&oe=68C8B555",
            "ad_text": "Для кожного клієнта ми підбираємо індивідуальні умови кредиту/лізингу.\n\nЦікаво? Ставте + під цим відео або надсилайте свій телефон 📞  у direct/приватні повідомлення та наш менджер звʼяжеться з вами вже СЬОГОДНІ💌",
            "videos": [
              {
                "video_preview_image_url": "https://scontent.ffcm1-1.fna.fbcdn.net/v/t39.35426-6/514061938_715560377882154_7344437162246089863_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=EStehz_0OJoQ7kNvwF7ekDL&_nc_oc=AdmzspsGIaD0DSWxXcUCVKtkqBIwDvHOE5W9zE3_eZS0vbWN2MqVSOBN1585nYaUyLA&_nc_zt=14&_nc_ht=scontent.ffcm1-1.fna&_nc_gid=fI1O0tDqp2UWthxiGbVaig&oh=00_AfakKa_tEytBMI598jEbqejTW2nC9y2aINoPiTPDoAipWg&oe=68C8C5EA",
                "video_sd_url": "https://video.ffcm1-1.fna.fbcdn.net/v/t42.1790-2/514287812_766849575688762_4630369727247592595_n.?_nc_cat=101&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=1J_0SKdtq1MQ7kNvwG0Ss60&_nc_oc=AdnYZwf_q_BHu2woutvvs0cmcYtsQjtqKYo3gWRlUX5tIibGdmsOJow94NSVKAyF-xw&_nc_zt=28&_nc_ht=video.ffcm1-1.fna&_nc_gid=fI1O0tDqp2UWthxiGbVaig&oh=00_AfaU19N1en3781Wx_aRLmIgcbW-CWv7eGnfOCPwwMHupkw&oe=68C8C6A5"
              }
            ],
            "ad_started": "Jun 30, 2025"
          },
          "ai_analysis": {
            "full_analysis": "Анализ объявления Komis Auto Вінниця:\n\n1) Копирайтинг\n\nПодход: Персонализированный сервис с индивидуальными условиями\n\nСильные стороны:\n- Акцент на персонализации\n- Понятный призыв к действию\n- Обещание быстрого контакта\n\nСлабые стороны:\n- Отсутствие конкретных условий\n- Нет примеров или цифр\n- Общие формулировки без доказательств\n- Языковые ошибки (менджер)\n\n2) Маркетинг\n\nТип предложения: Персонализированный финансовый продукт\nСтадия воронки: Лидогенерация через персональный контакт\nОригинальность: Средняя, фокус на индивидуальном подходе\n\n3) Психология\n\nДрайверы: Персонализация, ощущение особенного обслуживания\nСтруктура: Простая, фокус на персональном контакте\nПриемы влияния: Персонализация, срочность контакта\n\n4) Рекомендации\n\n- Добавить примеры индивидуальных условий\n- Включить конкретные цифры и диапазоны\n- Добавить кейсы успешных клиентов\n- Исправить языковые ошибки\n- Усилить доказательства экспертности"
          }
        },
        {
          "competitor_name": "Komis Auto Вінниця",
          "ad_data": {
            "platforms": [
              "INSTAGRAM"
            ],
            "page_profile_uri": "https://www.facebook.com/KomisAutoVn/",
            "page_profile_picture_url": "https://scontent.ffcm1-1.fna.fbcdn.net/v/t39.35426-6/505989305_2211541562694087_7891440418111900253_n.jpg?stp=dst-jpg_s60x60_tt6&_nc_cat=104&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=wXtUiTrkrqMQ7kNvwHK8x_Z&_nc_oc=Adk17_zNyJ0YlFXldspjEN412bCFZRDrP6sZyqnaTAJT_c0RIt-EcVHbb3arhfTTB_g&_nc_zt=14&_nc_ht=scontent.ffcm1-1.fna&_nc_gid=fI1O0tDqp2UWthxiGbVaig&oh=00_AfY9REHN2SUa6qpvN3DJbBh06VZIDegol5Wnyeba8vMePg&oe=68C89B2B",
            "ad_text": "Для кожного клієнта ми підбираємо індивідуальні умови кредиту/лізингу.\n\nЦікаво? Ставте + під цим відео або надсилайте свій телефон 📞  у direct/приватні повідомлення та наш менджер звʼяжеться з вами вже СЬОГОДНІ💌",
            "videos": [
              {
                "video_preview_image_url": "https://scontent.ffcm1-1.fna.fbcdn.net/v/t39.35426-6/505713189_1837069556858708_2450484517947477475_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=3ysxWQ2LO4MQ7kNvwEkcHgC&_nc_oc=AdlnA2A6Wn5hL4xXWu9Bxfvj20u2RjGjtqiINnhaM9G7yCHMCtIpMHrt_FI-GDXCQDE&_nc_zt=14&_nc_ht=scontent.ffcm1-1.fna&_nc_gid=fI1O0tDqp2UWthxiGbVaig&oh=00_AfZjyF1rNpXVN_PU6T4Khb1y67IZEHNQCjVK1yFbQtrgNg&oe=68C8A6F2",
                "video_sd_url": "https://video.ffcm1-1.fna.fbcdn.net/v/t42.1790-2/505598237_1862509937877294_3699687029879141472_n.mp4?_nc_cat=103&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=alNwwQjrJAwQ7kNvwG_DzHy&_nc_oc=AdlfjC18AvI_7KPszE1wyofJ6pu267EhKdmGwpiJUBHX-oIkifFGx576R56c2qlk4Q0&_nc_zt=28&_nc_ht=video.ffcm1-1.fna&_nc_gid=fI1O0tDqp2UWthxiGbVaig&oh=00_AfZNEDu0oZ0r6_J2ty2XjsM2IPvlF1dr2nrLRj22ms1qOw&oe=68C8B752"
              }
            ],
            "ad_started": "Jun 10, 2025"
          },
          "ai_analysis": {
            "full_analysis": "Дублирующее объявление Komis Auto Вінниця с идентичным текстом. Анализ остается таким же:\n\n1) Копирайтинг - тот же подход с персонализацией\n2) Маркетинг - дублирование стратегии без вариаций\n3) Психология - использование тех же психологических триггеров\n\nДополнительные замечания:\n- Отсутствие A/B тестирования разных подходов\n- Упущенная возможность протестировать разные сообщения\n- Рекомендуется создать вариации для оптимизации результатов"
          }
        }
      ]
    }
  ];

  return <AnalyticsDashboard data={analysisData} />;
};

export default Index;
