// src/js/i18n.js - Internationalization System

const translations = {
    uk: {
        logo: 'Apocalypse Tower Defense',
        nav: {
            home: 'Головна',
            features: 'Особливості',
            gameplay: 'Геймплей',
            team: 'Команда'
        },
        header: {
            play: 'Грати зараз'
        },
        hero: {
            title1: 'TOWER DEFENSE',
            title2: 'Apocalypse',
            description: 'Захищай свою базу від нескінченних хвиль зомбі.<br>Будуй вежі, покращуй захист та стань легендою!',
            playBtn: '🎮 Почати гру',
            learnBtn: 'Дізнатись більше',
            stats: {
                players: 'Гравців',
                towers: 'Вежі',
                zombies: 'Зомбі'
            }
        },
        features: {
            title: 'Особливості гри',
            subtitle: 'Унікальний геймплей та нескінченні можливості',
            towers: {
                title: 'Епічні вежі',
                text: 'Більше 100 унікальних вежів з різними здібностями та покращеннями'
            },
            zombies: {
                title: 'Різні зомбі',
                text: '50+ типів зомбі з унікальними атаками та можливостями'
            },
            abilities: {
                title: 'Потужні здібності',
                text: 'Використовуй спеціальні скіли для знищення ворогів'
            },
            coop: {
                title: 'Кооператив',
                text: 'Грай з друзями до 4 гравців одночасно'
            },
            rankings: {
                title: 'Рейтинги',
                text: 'Змагайся за перше місце в глобальній таблиці лідерів'
            },
            missions: {
                title: 'Місії',
                text: 'Виконуй щоденні завдання та отримуй винагороди'
            }
        },
        gameplay: {
            title: 'Захоплюючий геймплей',
            description: 'Apocalypse Tower Defense - це стратегічна гра, де ти маєш захищати свою базу від нескінченних хвиль зомбі. Будуй вежі, покращуй їх та використовуй тактику для перемоги!',
            list: {
                item1: '✓ Понад 50 унікальних рівнів',
                item2: '✓ Різні режими складності',
                item3: '✓ Система прогресії та покращень',
                item4: '✓ Регулярні оновлення контенту'
            },
            placeholder: 'Ігровий процес'
        },
        team: {
            title: 'Наша команда',
            subtitle: 'Професіонали, які створюють гру',
            recruitment: {
                title: 'Ми шукаємо таланти!',
                text: 'Приєднуйся до нашої команди та допомагай створювати найкращу tower defense гру на Roblox! Ми шукаємо: програмістів, 3D-моделерів, дизайнерів, тестерів та маркетологів.',
                button: '📧 Надіслати заявку'
            },
            members: {
                member1: {
                    name: 'Олександр',
                    role: 'Lead Developer',
                    description: 'Головний розробник гри. Відповідає за архітектуру та основний геймплей.'
                },
                member2: {
                    name: 'Марія',
                    role: 'Game Designer',
                    description: 'Ігровий дизайнер. Створює баланс та унікальні механіки.'
                },
                member3: {
                    name: 'Дмитро',
                    role: '3D Artist',
                    description: '3D художник. Моделює вежі, зомбі та всі ігрові об\'єкти.'
                },
                member4: {
                    name: 'Анна',
                    role: 'QA Tester',
                    description: 'Тестувальниця. Знаходить баги та покращує якість гри.'
                },
                member5: {
                    name: 'Ігор',
                    role: 'Marketing Manager',
                    description: 'Маркетолог. Просуває гру та залучає нових гравців.'
                },
                member6: {
                    name: 'Софія',
                    role: 'Community Manager',
                    description: 'Менеджер спільноти. Спілкується з гравцями та збирає відгуки.'
                }
            }
        },
        cta: {
            title: 'Готовий почати битву?',
            text: 'Приєднуйся до тисяч гравців та стань легендарним захисником!',
            button: '🎮 Грати зараз на Roblox'
        },
        footer: {
            copyright: '© 2025 Apocalypse Tower Defense. Roblox Game',
            privacy: 'Політика конфіденційності',
            terms: 'Умови використання',
            support: 'Підтримка'
        }
    },
    en: {
        logo: 'Apocalypse Tower Defense',
        nav: {
            home: 'Home',
            features: 'Features',
            gameplay: 'Gameplay',
            team: 'Team'
        },
        header: {
            play: 'Play Now'
        },
        hero: {
            title1: 'TOWER DEFENSE',
            title2: 'Apocalypse',
            description: 'Defend your base from endless waves of zombies.<br>Build towers, upgrade defenses and become a legend!',
            playBtn: '🎮 Start Game',
            learnBtn: 'Learn More',
            stats: {
                players: 'Players',
                towers: 'Towers',
                zombies: 'Zombies'
            }
        },
        features: {
            title: 'Game Features',
            subtitle: 'Unique gameplay and endless possibilities',
            towers: {
                title: 'Epic Towers',
                text: 'Over 100 unique towers with different abilities and upgrades'
            },
            zombies: {
                title: 'Various Zombies',
                text: '50+ types of zombies with unique attacks and abilities'
            },
            abilities: {
                title: 'Powerful Abilities',
                text: 'Use special skills to destroy enemies'
            },
            coop: {
                title: 'Co-op Mode',
                text: 'Play with friends up to 4 players simultaneously'
            },
            rankings: {
                title: 'Rankings',
                text: 'Compete for first place in the global leaderboard'
            },
            missions: {
                title: 'Missions',
                text: 'Complete daily quests and earn rewards'
            }
        },
        gameplay: {
            title: 'Engaging Gameplay',
            description: 'Apocalypse Tower Defense is a strategy game where you defend your base from endless waves of zombies. Build towers, upgrade them and use tactics to win!',
            list: {
                item1: '✓ Over 50 unique levels',
                item2: '✓ Different difficulty modes',
                item3: '✓ Progression and upgrade system',
                item4: '✓ Regular content updates'
            },
            placeholder: 'Gameplay'
        },
        team: {
            title: 'Our Team',
            subtitle: 'Professionals creating the game',
            recruitment: {
                title: 'We\'re Looking for Talent!',
                text: 'Join our team and help create the best tower defense game on Roblox! We\'re looking for: programmers, 3D modelers, designers, testers, and marketers.',
                button: '📧 Send Application'
            },
            members: {
                member1: {
                    name: 'Alexander',
                    role: 'Lead Developer',
                    description: 'Lead game developer. Responsible for architecture and core gameplay.'
                },
                member2: {
                    name: 'Maria',
                    role: 'Game Designer',
                    description: 'Game designer. Creates balance and unique mechanics.'
                },
                member3: {
                    name: 'Dmitry',
                    role: '3D Artist',
                    description: '3D artist. Models towers, zombies and all game objects.'
                },
                member4: {
                    name: 'Anna',
                    role: 'QA Tester',
                    description: 'Tester. Finds bugs and improves game quality.'
                },
                member5: {
                    name: 'Igor',
                    role: 'Marketing Manager',
                    description: 'Marketer. Promotes the game and attracts new players.'
                },
                member6: {
                    name: 'Sophia',
                    role: 'Community Manager',
                    description: 'Community manager. Communicates with players and collects feedback.'
                }
            }
        },
        cta: {
            title: 'Ready to Start the Battle?',
            text: 'Join thousands of players and become a legendary defender!',
            button: '🎮 Play Now on Roblox'
        },
        footer: {
            copyright: '© 2025 Apocalypse Tower Defense. Roblox Game',
            privacy: 'Privacy Policy',
            terms: 'Terms of Use',
            support: 'Support'
        }
    },
    ru: {
        logo: 'Apocalypse Tower Defense',
        nav: {
            home: 'Главная',
            features: 'Особенности',
            gameplay: 'Геймплей',
            team: 'Команда'
        },
        header: {
            play: 'Играть сейчас'
        },
        hero: {
            title1: 'TOWER DEFENSE',
            title2: 'Apocalypse',
            description: 'Защищай свою базу от бесконечных волн зомби.<br>Строй башни, улучшай защиту и стань легендой!',
            playBtn: '🎮 Начать игру',
            learnBtn: 'Узнать больше',
            stats: {
                players: 'Игроков',
                towers: 'Башни',
                zombies: 'Зомби'
            }
        },
        features: {
            title: 'Особенности игры',
            subtitle: 'Уникальный геймплей и бесконечные возможности',
            towers: {
                title: 'Эпичные башни',
                text: 'Более 100 уникальных башен с разными способностями и улучшениями'
            },
            zombies: {
                title: 'Разные зомби',
                text: '50+ типов зомби с уникальными атаками и возможностями'
            },
            abilities: {
                title: 'Мощные способности',
                text: 'Используй специальные скиллы для уничтожения врагов'
            },
            coop: {
                title: 'Кооператив',
                text: 'Играй с друзьями до 4 игроков одновременно'
            },
            rankings: {
                title: 'Рейтинги',
                text: 'Соревнуйся за первое место в глобальной таблице лидеров'
            },
            missions: {
                title: 'Миссии',
                text: 'Выполняй ежедневные задания и получай награды'
            }
        },
        gameplay: {
            title: 'Захватывающий геймплей',
            description: 'Apocalypse Tower Defense - это стратегическая игра, где ты должен защищать свою базу от бесконечных волн зомби. Строй башни, улучшай их и используй тактику для победы!',
            list: {
                item1: '✓ Более 50 уникальных уровней',
                item2: '✓ Разные режимы сложности',
                item3: '✓ Система прогрессии и улучшений',
                item4: '✓ Регулярные обновления контента'
            },
            placeholder: 'Игровой процесс'
        },
        team: {
            title: 'Наша команда',
            subtitle: 'Профессионалы, создающие игру',
            recruitment: {
                title: 'Мы ищем таланты!',
                text: 'Присоединяйся к нашей команде и помогай создавать лучшую tower defense игру на Roblox! Мы ищем: программистов, 3D-моделеров, дизайнеров, тестеров и маркетологов.',
                button: '📧 Отправить заявку'
            },
            members: {
                member1: {
                    name: 'Александр',
                    role: 'Lead Developer',
                    description: 'Главный разработчик игры. Отвечает за архитектуру и основной геймплей.'
                },
                member2: {
                    name: 'Мария',
                    role: 'Game Designer',
                    description: 'Игровой дизайнер. Создает баланс и уникальные механики.'
                },
                member3: {
                    name: 'Дмитрий',
                    role: '3D Artist',
                    description: '3D художник. Моделирует башни, зомби и все игровые объекты.'
                },
                member4: {
                    name: 'Анна',
                    role: 'QA Tester',
                    description: 'Тестировщица. Находит баги и улучшает качество игры.'
                },
                member5: {
                    name: 'Игорь',
                    role: 'Marketing Manager',
                    description: 'Маркетолог. Продвигает игру и привлекает новых игроков.'
                },
                member6: {
                    name: 'София',
                    role: 'Community Manager',
                    description: 'Менеджер сообщества. Общается с игроками и собирает отзывы.'
                }
            }
        },
        cta: {
            title: 'Готов начать битву?',
            text: 'Присоединяйся к тысячам игроков и стань легендарным защитником!',
            button: '🎮 Играть сейчас на Roblox'
        },
        footer: {
            copyright: '© 2025 Apocalypse Tower Defense. Roblox Game',
            privacy: 'Политика конфиденциальности',
            terms: 'Условия использования',
            support: 'Поддержка'
        }
    }
};

class I18n {
    constructor() {
        this.currentLang = this.getStoredLanguage() || 'uk';
        this.translations = translations;
        this.init();
    }

    init() {
        this.setupLanguageSwitcher();
        this.applyLanguage(this.currentLang);
    }

    getStoredLanguage() {
        return localStorage.getItem('language');
    }

    setStoredLanguage(lang) {
        localStorage.setItem('language', lang);
    }

    setupLanguageSwitcher() {
        const langToggle = document.getElementById('langToggle');
        const langDropdown = document.getElementById('langDropdown');
        const langOptions = document.querySelectorAll('.lang-option');

        langToggle?.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown?.classList.toggle('active');
        });

        document.addEventListener('click', () => {
            langDropdown?.classList.remove('active');
        });

        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = option.dataset.lang;
                this.changeLanguage(lang);
                langDropdown?.classList.remove('active');
            });
        });
    }

    changeLanguage(lang) {
        if (!this.translations[lang]) {
            console.error(`Language ${lang} not found`);
            return;
        }

        this.currentLang = lang;
        this.setStoredLanguage(lang);
        this.applyLanguage(lang);
        this.updateLanguageButton(lang);
    }

    applyLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            element.classList.add('translating');
            
            setTimeout(() => {
                const key = element.getAttribute('data-i18n');
                const translation = this.getTranslation(key, lang);
                
                if (translation) {
                    element.innerHTML = translation;
                }
                
                element.classList.remove('translating');
            }, 100);
        });

        document.documentElement.lang = lang;
    }

    getTranslation(key, lang) {
        const keys = key.split('.');
        let value = this.translations[lang];

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return null;
            }
        }

        return value;
    }

    updateLanguageButton(lang) {
        const currentLangText = document.getElementById('currentLang');
        const langOptions = document.querySelectorAll('.lang-option');

        if (currentLangText) {
            currentLangText.textContent = lang.toUpperCase();
        }

        langOptions.forEach(option => {
            if (option.dataset.lang === lang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }

    getCurrentLanguage() {
        return this.currentLang;
    }

    t(key) {
        return this.getTranslation(key, this.currentLang);
    }
}

const i18n = new I18n();
window.i18n = i18n;
