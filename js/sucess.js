
window.onload = () => {
    function isIOS() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }

    let events = [];

    if (isIOS()) {
        if (totalValue < 2) {
            events = [
                {
                    title: 'خامل',
                    location: 'Online',
                    description: "شهر جديد وإنجازات جديدة كيف كان الشهر اللي فات سهل صح؟ هذا الشهر بيكون اسهل ان شاء الله",
                    start:'2023-11-1T09:00:00',
                },
                
            ];
        } else if (totalValue > 2) {
            events = [
                {
                    title: 'no',
                    description: 'This is the first sample event description.',
                    start: '20231102T090000Z',
                    end: '20231102T100000Z',
                    location: 'Sample Location 1',
                },
                {
                    title: 'Apple Event 2',
                    description: 'This is the second sample event description.',
                    start: '20231103T090000Z',
                    end: '20231103T100000Z',
                    location: 'Sample Location 2',
                }
            ];
        }

        document.getElementById('button').addEventListener('click', function () {
            let calContent = 'BEGIN:VCALENDAR\nVERSION:2.0\n';

            events.forEach((event, index) => {
                calContent += `BEGIN:VEVENT
DTSTAMP:${new Date().toISOString().replace(/[-:.]/g, '')}
DTSTART:${event.start}
DTEND:${event.end}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT\n`;
            });

            calContent += 'END:VCALENDAR';

            const dataUrl = 'data:text/calendar;charset=utf-8,' + encodeURIComponent(calContent);
            this.setAttribute('href', dataUrl);
            document.getElementById('button').setAttribute('href', dataUrl);
        });
    }
    else {


        function initClient() {
            gapi.client.init({
                clientId: '831010665054-18pkq0jo07jcl72r3kg1lupei18fc8hl.apps.googleusercontent.com',
                discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
                scope: 'https://www.googleapis.com/auth/calendar',
                cookiepolicy: 'single_host_origin',
                plugin_name: 'hello'
            });
        }

        gapi.load('client:auth2', initClient);

        function handleAuthClick() {
            gapi.auth2.getAuthInstance().signIn().then((res) => {
                document.getElementById('button').click();

            });
        }


        document.getElementById('button').addEventListener('click', function () {

            const totalValue = localStorage.getItem('totalValue');

            if (totalValue < 2) {
                var events = [
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "شهر جديد وإنجازات جديدة كيف كان الشهر اللي فات سهل صح؟ هذا الشهر بيكون اسهل ان شاء الله",
                        'start': {
                            'dateTime': '2023-11-1T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'هدفك في هذا الأسبوع١٤ دقيقة مشي يومين بالأسبوع لا  تنسَ سخن عضلاتك وهيئ جسمك قبل تمشي',
                        'start': {
                            'dateTime': '2023-11-5T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-5T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'الالتزام بسلوك المشي سهل... لو غيرت البيئة زودت الحركة بتفاصيل يومك مشيت مع  صديق أو عائلتك ',
                        'start': {
                            'dateTime': '2023-11-7T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-7T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "تعرف علامات المشي الصحيح؟ اطلع على الرابط التالي https://www.moh.gov.sa/HealthAwareness/EducationalContent/PublicHealth/Pages/Walking.aspx ",
                        'start': {
                            'dateTime': '2023-11-10T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-10T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },

                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "زود يوم  على هدفك  وامش ١٤ دقيقة ٣ ايام بالأسبوع ",
                        'start': {
                            'dateTime': '2023-11-12T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "قبل تمشي اليوم  تأكد من اختيار الحذاء الصحيح المناسب لك يكون مقاسك سميك من جهة الكعب.  مزود بطبقة لتوسيد القدم. كعب ثابت لتثبيت القدم",
                        'start': {
                            'dateTime': '2023-11-14T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-14T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "اليوم غيّر خطتك وتوجه للمسجد مشي .. صحة وأجر💪🏼 ‏وجمعتك مباركة",
                        'start': {
                            'dateTime': '2023-11-17T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-17T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },

                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'جاء الوقت ارفع هدفك وزود  دقيقتين وخلها ١٦',
                        'start': {
                            'dateTime': '2023-11-19T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "المشي يأخذ  ٢٪ تقريبًا من يومك، وكل اللي تحتاجه  حذاء مناسب لبس مريح وانطلق📢🏃🏻",
                        'start': {
                            'dateTime': '2023-11-21T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-21T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "كفو عليك وصلت لآخر أسبوع بهذا الشهر زودها  ٣ دقائق  وخلها 19",
                        'start': {
                            'dateTime': '2023-11-26T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-26T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },



                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "تحدى نفسك وأصدقائك،  مين عنده اللياقة أعلى ؟ تقدرون تستخدمون تطبيق صحتي لحساب عدد الخطوات ",
                        'start': {
                            'dateTime': '2023-11-24T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-24T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },

                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "لا تنسَ تشرب ماء ، قبل تمشي اليوم",
                        'start': {
                            'dateTime': '2023-11-29T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-29T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "هدفك في هذا الأسبوع٢٢ دقيقة مشي  ٣ أيام بالأسبوع لا تنسَ تمارين التمدد ",
                        'start': {
                            'dateTime': '2023-12-1T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "كلما زاد نبضك خلال المشي كلما ارتفعت لياقتك ",
                        'start': {
                            'dateTime': '2023-12-4T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-4T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'قيس تطور أدائك، تابع نبضات قلبك، مدة تمرينك و مدى لياقتك ',
                        'start': {
                            'dateTime': '2023-12-7T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-7T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': ":زود دقيقتين على هدفك وامش ٢٤ دقيقة ",
                        'start': {
                            'dateTime': '2023-12-10T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-10T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "صباحك نشاط وصحة   اختر الحذاء المناسب👟 ‏وحدد وجهتك🎯 ‏وانطلق 📢🏃🏻",
                        'start': {
                            'dateTime': '2023-12-12T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "صباحك صحة وإنجاز 🤩❤️ كم خطوة مشيت اليوم؟ شاركنا  على #امش30",
                        'start': {
                            'dateTime': '2023-12-16T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-16T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "جاء الوقت ارفع هدفك وزود ٣ دقائق وخلها 27  ",
                        'start': {
                            'dateTime': '2023-12-17T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-17T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'قسم مشيك على دفعات مثلًا ١٠ دقائق على مدار اليوم حتى توصل لهدفك',
                        'start': {
                            'dateTime': '2023-12-19T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "22:خلنا معك وأنت تمشي 🏃🏻، واسمع  بودكاست #عش_بصحة https://bit.ly/3uGoNwI                            ",
                        'start': {
                            'dateTime': '2023-12-22T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-22T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "كفو عليك وصلت لآخر أسبوع بهذا الشهر زودها  ٣ دقائق  وخلها 30",
                        'start': {
                            'dateTime': '2023-12-24T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-24T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "جرّب تروح اليوم مع أطفالك أو أخوانك إلى الحديقة",
                        'start': {
                            'dateTime': '2023-12-28T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-28T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },

                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "مبروووك ... وصلت لـ٣٠ دقيقة 🎉 👏🏻 كفو والله، لا تنسَ تكافئ نفسك بعد الخطوات اللي مشيتها 👏🏻",
                        'start': {
                            'dateTime': '2023-12-30T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-30T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'هدفك في هذا الأسبوع​٣٠ دقيقة مشي ​لا تنسَ ​تمارين الاستطالة والإحماء​',
                        'start': {
                            'dateTime': '2024-1-1T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "كيف تستمر وتحافظ على سلوك المشي؟​• غير بيئتك المحيطة، أو كن مؤثرا فيهم .​ • زود الحركة بتفاصيل يومك​ • غير مكان مشيك من فترة لفترة​• امشِ مع أحد تحبه.​",
                        'start': {
                            'dateTime': '2024-1-4T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-4T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'زود دقيقتين على هدفك ​وامش ٣٢ دقائق​',
                        'start': {
                            'dateTime': '2024-1-7T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-7T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': ":تحس عضلاتك شاده؟ لا تنسَ ​• سخن جسمك قبل التمرين​ • مدد عضلاتك بعد التمرين",
                        'start': {
                            'dateTime': '2024-1-9T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-9T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': ":صباحك صحّة ✋، ​‏جرب تشارك أهلك متعة المشي لمدة نصف ساعة",
                        'start': {
                            'dateTime': '2024-1-12T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "جاء الوقت ارفع هدفك وزود​٣ دقائق وخلها 35 دقيقة",
                        'start': {
                            'dateTime': '2024-1-14T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-14T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': ':لا تنسَ تشرب ماء ، قبل تمشي اليوم .​',
                        'start': {
                            'dateTime': '2024-1-16T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-16T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',

                        'description': "بشر، حققت الهدف هذا الأسبوع ؟🤩​في حال ما قدرت توصل لهدفك، عادي كمل على جدول ، و أضف له أسبوع.​",
                        'start': {
                            'dateTime': '2024-1-19T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "كفو عليك وصلت لآخر أسبوع  بهذا الشهر استمر على ٣٥، ٣ايام بالأسبوع",
                        'start': {
                            'dateTime': '2024-1-21T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-21T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',

                        'location': 'Online',
                        'description': "جرب توقف اليوم بعيد، وكملها مشي للدوام.",
                        'start': {
                            'dateTime': '2024-1-23T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-23T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'desxription': "اشحن طاقتك وامشي مع أصدقائك وتحدى عائلتك!",
                        'start': {
                            'dateTime': '2024-1-26T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-26T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },

                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "وصلنا اسبوع ٢١ من التزامك وحرصك على تحقيق أهدافك فخورين فيك!​هدفك في هذا الأسبوع​ ٣٨ دقيقة مشي ​",
                        'start': {
                            'dateTime': '2024-1-28T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-28T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },

                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "3 عناصر تؤثر على أدائك في التمرين:​ -نومك​ -تغذيتك خلال اليوم​ -شربك للماء​",
                        'start': {
                            'dateTime': '2024-2-1T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "زود دقيقتين على هدفك ​وامش ٤٠ دقائق ​",
                        'start': {
                            'dateTime': '2024-2-4T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-4T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "قوة عضلاتك، تعديل مزاجك، توازن جسمك، ولياقة قلبك، كلها تعتمد على نشاطك البدني​",
                        'start': {
                            'dateTime': '2024-2-6T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-6T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': ":اجمع الاثنين!​ اقضِ وقتك مع احبابك ، ومارسوا الرياضة معا.​",
                        'start': {
                            'dateTime': '2024-2-9T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-9T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "استمر على هدفك ​ وامش ٤٠ دقيقةو ٣ أيام بالأسبوع ​",
                        'start': {
                            'dateTime': '2024-2-11T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-11T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',

                        'desription': "خذ لك بريك ١٠ دقائق من تمارين التمدد​",
                        'start': {
                            'dateTime': '2024-2-13T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-13T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "صباحك صحة وإنجاز 🤩❤️​حافظ على صحتك واستمر بتحقيق خطواتك! 🤩​",
                        'start': {
                            'dateTime': '2024-2-16T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-16T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "جاء الوقت ارفع هدفك وزود دقيقتين وخلها ٤٢  ",
                        'start': {
                            'dateTime': '2024-2-18T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-18T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "افتح عداد الخطوات تطبيق صحتي وانطلق !!🏃🏻‍♂️​",
                        'start': {
                            'dateTime': '2024-2-20T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-20T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',

                        'location': 'Online',
                        'description': "جمعة مباركة🤍​كم خطوة مشيت اليوم؟ شاركنا  على #امش30​",
                        'start': {
                            'dateTime': '2024-2-23T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-23T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',

                        'description': "كفو عليك وصلت لآخر أسبوع​ بهذا الشهر زودها  ٣ دقائق ​وخلها ٤٥​",
                        'start': {
                            'dateTime': '2024-2-25T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-25T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },

                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "مّدد خطواتك وعزز صحتك ومزاجك واطلع امشي  ​",
                        'start': {
                            'dateTime': '2024-2-27T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-27T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },

                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "هدفك في هذا الأسبوع​ الاستمرار على ٤٥ دقيقة مشي ​مايحتاج نوصيك بتسخين عضلاتك وتهيئ جسمك قبل  تمشي​",
                        'start': {
                            'dateTime': '2024-3-3T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-3T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "صباحك صحة وإنجاز 🤩❤️​المشي يساعد على التفكير.. جّرب تمشي قبل تنجز مهامك ​",
                        'start': {
                            'dateTime': '2024-3-6T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-6T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "",
                        'start': {
                            'dateTime': '2024-3-3T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-3T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "لا تحتار متى تمشي في​ رمضان ..​بعد التراويح وقت مناسب ​أو قبل السحور",
                        'start': {
                            'dateTime': '2024-3-9T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-9T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "جاء الوقت ارفع هدفك ​دقيقتين وخلها ٤٨    ",
                        'start': {
                            'dateTime': '2024-3-10T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-10T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': ":رمضان كريم🤍​خل رمضان هذا غير  وتحدى أصدقائك أو عائلتك مين أكثر واحد عدد خطوات خلال شهر رمضان​",
                        'start': {
                            'dateTime': '2024-3-12T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "تذكر المشي إلى المسجد صحة وأجر​",
                        'start': {
                            'dateTime': '2024-3-14T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-14T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': ":زود ٣ دقائق على هدفك يابطل وامش ٥٠ دقائق ​",
                        'start': {
                            'dateTime': '2024-3-17T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-17T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "لا تنسَ تشرب ماء ، قبل تمشي اليوم .​",
                        'start': {
                            'dateTime': '2024-3-19T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "كملت عدد خطواتك لليوم ؟  يمديك تلحق ​جرب تقسم مشيك على دفعات مثلًا ١٠ دقائق على مدار اليوم حتى توصل لهدفك​",
                        'start': {
                            'dateTime': '2024-3-22T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-22T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "كفو عليك وصلت لآخر أسبوع​ بهذا الشهر زودها  ٣ دقائق ​وخلها ٥٣​",
                        'start': {
                            'dateTime': '2024-3-24T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-24T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "حمل كتاب صوتي أو بودكاست ​وأنطلق 🏃🏻‍♂️​",
                        'start': {
                            'dateTime': '2024-3-26T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-26T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': "مّدد خطواتك وعزز صحتك ومزاجك واطلع امشي وشارك أحد أصدقائك متعة المشي  ​​",
                        'start': {
                            'dateTime': '2024-3-28T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-28T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'هدفك في هذا الأسبوع​ ٥٥ دقيقة مشي​  مايحتاج نوصيك بتسخين عضلاتك وتهيئ جسمك قبل  تمشي​',
                        'start': {
                            'dateTime': '2024-4-1T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'كيف تتعامل مع آلام العضلات​ بعد التمرين؟​ - أكثر من السوائل. مارس بعض تمارين الإطالة الخفيفة.​جرب الكمادات الدافئة أو الثلج لتخفيف الألم.​  جرب الجاكوزي وقم بتدليك مكان الألم.​',
                        'start': {
                            'dateTime': '2024-4-4T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-4T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'استمر على هدفك ​ وامش ٥٥ دقيقة ٣ ايام بالأسبوع ​',
                        'start': {
                            'dateTime': '2024-4-7T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-7T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': ':لو كنت مستثقل أو مشغول عن المشي اليوم، ابدا بكره من بدري أو جرب طريقة تقسيم المشي على مدار اليوم​',
                        'start': {
                            'dateTime': '2024-4-9T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-9T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'صباحك صحة،​كمل احتفالات العيد مع  أحبابك وشاركهم متعة المشي في أقرب ممشى لكم​',
                        'start': {
                            'dateTime': '2024-4-12T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'زود ٣ دقائق على هدفك يابطل وامش ٥٨ دقائق ​',
                        'start': {
                            'dateTime': '2024-4-14T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-14T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'خذ لك بريك ١٠ دقائق من تمارين التمدد​',
                        'start': {
                            'dateTime': '2024-4-16T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-16T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': ':صباحك نشاط وصحة ​1. اختر الحذاء الداعم 👟 ​2. ‏وحدد وجهتك🎯​ 3. ‏وانطلق 📢🏃🏻​ ',
                        'start': {
                            'dateTime': '2024-4-19T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'كفو عليك وصلت لآخر أسبوع بهذا الشهر زودها دقيقتين بس! وخلها ٦٠ د، ​',
                        'start': {
                            'dateTime': '2024-4-21T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-21T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'كيف تكوّن صداقات جديدة مع الأشخاص النشيطين بدنيًا؟!​ انضم إلى نوادٍ رياضية، أو مجموعات مهتمة بالمشي في مدينتك عبر مواقع التواصل الاجتماعي.​',
                        'start': {
                            'dateTime': '2024-4-24T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-24T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'مبرووووك ... وصلت لـ٦٠ دقيقة 🎉 👏🏻 ​إنجاز يفتخر فيه فلا تنسَ تكافئ نفسك  👏🏻​وبهذه المناسبة بنغير أسلوب تحدي للشهر الجاي​',
                        'start': {
                            'dateTime': '2024-4-27T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-27T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'جمعة مباركة🤍​كم خطوة مشيت اليوم؟ شاركنا  على #امش30',
                        'start': {
                            'dateTime': '2024-5-3T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-3T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'كمل على ٣٠~ ٦٠ دقيقة ، ٤ ايام بالأسبوع   ',
                        'start': {
                            'dateTime': '2024-5-5T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-5T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'احرق سعراتك واطلع امشي​',
                        'start': {
                            'dateTime': '2024-5-7T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-7T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'حدد يوم في الأسبوع تمارس فيه الرياضة مع أطفالك ،أو إخوانك، مثل ​ المشي -القفز  على الحبل- الدراجات- كرة قدم​',
                        'start': {
                            'dateTime': '2024-5-10T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-10T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'كمل على ٣٠~ ٦٠ دقيقة ، ٤ ايام بالأسبوع    ',
                        'start': {
                            'dateTime': '2024-5-12T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'أحرص على ممارسة تمارين  تقوية العضلات 💪 ​على الأقل مرتين في الأسبوع​',
                        'start': {
                            'dateTime': '2024-5-14T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-14T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'لصحة الجسد، وصحة العلاقات: شارك عائلتك اليوم متعة المشي في أقرب حديقة  أو ممشى 👨‍👩‍👧‍👦​',
                        'start': {
                            'dateTime': '2024-5-17T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-17T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'جاء الوقت زودها يوم وخلها  ٣٠~ ٦٠ دقيقة ، ٥ ايام بالأسبوع     ​',
                        'start': {
                            'dateTime': '2024-5-19T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'إذا كنت مشغول اليوم جرب تقسم مشيك على دفعات مثلًا ١٠ دقائق على مدار اليوم حتى توصل لهدفك​',
                        'start': {
                            'dateTime': '2024-5-21T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-21T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'كفو عليك وصلت لآخر أسبوع​ بهذا الشهر استمر على ٣٠~ ٦٠ دقيقة ، ٥ ايام بالأسبوع​',
                        'start': {
                            'dateTime': '2024-5-26T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-26T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'لا تنسَ تشرب ماء ، قبل تمشي اليوم .',
                        'start': {
                            'dateTime': '2024-5-29T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-29T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'صباحك نشاط وحركة ​ كل خطوة تمشيها تنعكس على صحتك، لا ينتهي يومك بدون مشي​ ',
                        'start': {
                            'dateTime': '2024-5-24T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-24T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'وصلنا لأخر شهر من التذكيرات ❤️​فخورين فيك حققت انجاز عظيم بـ٩ شهور بس قدرت تبدأ من الصفر حتى ٦٠ دقيقة مشي!!​بهذه المناسبة هدفك هذا الشهر بيكون مختلف،​ أنت تحدده، عندك خيارين: تزيد المدة أو الأيام ​ أو تحافظ على مستواك​مستعد!؟🤩❤️',
                        'start': {
                            'dateTime': '2024-6-1T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'حدد خطتك وأهدافك لهذا الشهر كامل ​ وانطلق!!🏃🏻‍♂️',
                        'start': {
                            'dateTime': '2024-6-2T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-2T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': '•حدد هدفك​ • اصنع خطة ​• ابدأ بشيء بسيط وتدرج​ •  أزل المعوقات ​• جهز بيئتك ​• تابع تقدمك واستعد للتحديات​ • احتفل بالنجاحات ​',
                        'start': {
                            'dateTime': '2024-6-4T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-4T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'شاركنا هدفك لهذا الأسبوع على هاشتاق #امش٣٠​',
                        'start': {
                            'dateTime': '2024-6-9T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-9T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'حددت خطتك وطبقتها؟ كل اللي عليك تراقب أدائك، تابع نبضات قلبك، مدة تمرينك و مدى لياقتك.​',
                        'start': {
                            'dateTime': '2024-6-12T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'كيف تستمر على اتباع سلوك المشي؟ ​ -بسط السلوك، قسم المشي على دفعات على مدار اليوم​ - اصنع  بيئة محفزة. ​-اجعل الإشارة واضحة، استخدم تطبيقات تتبّع العادات أو منبه لتذكيرك ​',
                        'start': {
                            'dateTime': '2024-6-17T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-17T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'صباحك صحة، كمل احتفالات العيد مع  أحبابك وشاركهم متعة المشي في أقرب ممشى لكم​',
                        'start': {
                            'dateTime': '2024-6-21T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-21T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'تابع تقدمك واستعد للتحديات، كن مرن ولا تخف من تعديل أو تغيير خططك وأهدافك عند مواجهة عقبات أو صعوبات ​',
                        'start': {
                            'dateTime': '2024-6-25T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-25T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'خامل',
                        'location': 'Online',
                        'description': 'وصلنا لنهاية مشوارنا معاك لكن مشوارك مع المشي ما إنتهى. الكرة بملعبك الآن، صار عندك القدرة والمهارات لممارسة المشي والمحافظة عليه',
                        'start': {
                            'dateTime': '2024-6-30T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-30T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },


                ];
            }
            else if (totalValue >= 2 && totalValue <= 4) {
                var events = [
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': ':شهر جديد وإنجازات جديدة  كيف كان الشهر اللي فات سهل صح؟ هذا الشهر بيكون اسهل ان شاء الله​',
                        'start': {
                            'dateTime': '2023-11-1T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'هدفك في هذا الأسبوع​ ٢٢ دقيقة مشي  ٣ أيام بالأسبوع​  لا تنسَ ​ تمارين التمدد ​',
                        'start': {
                            'dateTime': '2023-11-5T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-5T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'تحدى نفسك وأصدقائك،  مين عنده اللياقة أعلى ؟​ تقدرون تستخدمون تطبيق صحتي لحساب عدد الخطوات​',
                        'start': {
                            'dateTime': '2023-11-10T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-10T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'زود دقيقتين على هدفك يابطل​ وامش ٢٤ دقائق',
                        'start': {
                            'dateTime': '2023-11-12T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'الالتزام بسلوك المشي سهل... لو​ • غيرت البيئة​ • زودت الحركة بتفاصيل يومك​ • مشيت مع  صديق أو عائلتك ​',
                        'start': {
                            'dateTime': '2023-11-14T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-14T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'اليوم غيّر خطتك وتوجه للمسجد مشي .. صحة وأجر💪🏼​ وجمعتك مباركة​',
                        'start': {
                            'dateTime': '2023-11-17T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-17T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'جاء الوقت ارفع هدفك وزود​ ٣ دقائق وخلها ٢٧       ',
                        'start': {
                            'dateTime': '2023-11-19T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'الجو جميل وكل بخاطرة يمشي​ جرّب تروح اليوم مع أطفالك أو أخوانك إلى الحديقة ​',
                        'start': {
                            'dateTime': '2023-11-24T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-24T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'كفو عليك وصلت لآخر أسبوع​ بهذا الشهر زودها  ٣ دقائق ​ وخلها ٣٠​',
                        'start': {
                            'dateTime': '2023-11-26T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-26T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'مبروووك ... وصلت لـ٣٠ دقيقة 🎉 👏🏻 ​كفو والله، لا تنسَ تكافئ نفسك بعد الخطوات اللي مشيتها 👏🏻​',
                        'start': {
                            'dateTime': '2023-11-28T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-28T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'هدفك في هذا الأسبوع​ ٣٠ دقيقة مشي ​ لا تنسَ ​تمارين الاستطالة والإحماء​',
                        'start': {
                            'dateTime': '2023-12-3T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-3T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'المشي يأخذ  ٢٪ تقريبًا من يومك، وكل اللي تحتاجه ​·      حذاء مناسب​ ·      لبس مريح​ وانطلق📢🏃🏻​',
                        'start': {
                            'dateTime': '2023-12-5T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-5T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'صباحك صحّة ✋، ​‏جرب تشارك أهلك متعة المشي لمدة نصف ساعة ​',
                        'start': {
                            'dateTime': '2023-12-8T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-8T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'زود دقيقتين على هدفك يابطل وامش ٣٢  دقيقة​',
                        'start': {
                            'dateTime': '2023-12-10T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-10T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'جرب توقف اليوم بعيد، وكملها مشي للدوام.​',
                        'start': {
                            'dateTime': '2023-12-12T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': ':قسم مشيك على دفعات مثلًا ١٠ دقائق على مدار اليوم حتى توصل لهدفك​',
                        'start': {
                            'dateTime': '2023-12-15T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-15T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'جاء الوقت ارفع هدفك وزود​ ٣ دقائق وخلها ٣٥         ',
                        'start': {
                            'dateTime': '2023-12-17T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-17T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': ':كيف تستمر وتحافظ على سلوك المشي؟​ • غير بيئتك المحيطة، أو كن مؤثرا فيهم .• زود الحركة بتفاصيل يومك​ • غير مكان مشيك من فترة لفترة​ • امشِ مع أحد تحبه.​',
                        'start': {
                            'dateTime': '2023-12-19T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': "بشر، حققت الهدف هذا الأسبوع ؟🤩​في حال ما قدرت توصل لهدفك، عادي كمل على جدول ، و أضف له أسبوع.​",
                        'start': {
                            'dateTime': '2023-12-22T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-22T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'كفو عليك وصلت لآخر أسبوع بهذا الشهر  ٣٨دقيقة في ٣ايام بالأسبوع​',
                        'start': {
                            'dateTime': '2023-12-24T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-24T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'تحس عضلاتك شاده؟ لا تنسَ ​ • سخن جسمك قبل التمرين​ • مدد عضلاتك بعد التمرين​',
                        'start': {
                            'dateTime': '2023-12-26T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-26T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'اشحن طاقتك وامشي مع أصدقائك وتحدى عائلتك!',
                        'start': {
                            'dateTime': '2023-12-29T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-29T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'هدفك في هذا الأسبوع​٤٠ دقيقة مشي ​لا تنسَ ​ تمارين الاستطالة والإحماء​​',
                        'start': {
                            'dateTime': '2023-12-31T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-31T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': '3 عناصر تؤثر على أدائك في التمرين:​ -نومك​ -تغذيتك خلال اليوم​ -شربك للماء​',
                        'start': {
                            'dateTime': '2024-1-4T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-4T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': ':زود دقيقتين على هدفك يابطل وامش ٤٢ دقائق ',
                        'start': {
                            'dateTime': '2024-1-7T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-7T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'جمعة مباركة🤍​كم خطوة مشيت اليوم؟ شاركنا  على #امش30​',
                        'start': {
                            'dateTime': '2024-1-12T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': ':جاء الوقت ارفع هدفك وزود​ ٣ دقائق وخلها ٤٥ د​ ٣ أيام بالأسبوع ',
                        'start': {
                            'dateTime': '2024-1-14T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-14T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': ':لا تنسَ تشرب ماء ، قبل تمشي اليوم ',
                        'start': {
                            'dateTime': '2024-1-16T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-16T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': ':جرّب تروح اليوم مع عائلتك إلى الحديقة ​',
                        'start': {
                            'dateTime': '2024-1-19T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'استمر على هدفك يابطل​ وامش ٤٥ دقائق​',
                        'start': {
                            'dateTime': '2024-1-21T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-21T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'خذ لك بريك ١٠ دقائق من تمارين التمدد',
                        'start': {
                            'dateTime': '2024-1-23T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-23T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'حدد يوم في الأسبوع تمارس فيه الرياضة مع أطفالك ،أو إخوانك، مثل ​المشي -القفز  على الحبل- الدراجات- كرة قدم​',
                        'start': {
                            'dateTime': '2024-1-26T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-26T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'كفو عليك وصلت لآخر أسبوع بهذا الشهر زودها  ٣ دقائق وخلها ٤٨​                            ',
                        'start': {
                            'dateTime': '2024-1-28T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-28T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'صباحك صحة وإنجاز 🤩❤️​ حافظ على صحتك واستمر بتحقيق خطواتك! 🤩​',
                        'start': {
                            'dateTime': '2024-2-1T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'وصلنا اسبوع ٢٢ من التزامك وحرصك على تحقيق أهدافك فخورين فيك!​ هدفك في هذا الأسبوع​ ٥٠ دقيقة مشي ٣  ايام بالأسبوع​',
                        'start': {
                            'dateTime': '2024-2-4T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-4T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'صباحك نشاط وصحة ​1. اختر الحذاء المناسب👟 ​ 2. ‏وحدد وجهتك🎯​ 3. ‏وانطلق 📢🏃🏻​',
                        'start': {
                            'dateTime': '2024-2-6T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-6T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'اجمع الاثنين!​ اقضِ وقتك مع احبابك ، ومارسوا الرياضة معا.​',
                        'start': {
                            'dateTime': '2024-2-9T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-9T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'جاء الوقت ارفع هدفك وزود دقيقتين وخلها ٥٢      ',
                        'start': {
                            'dateTime': '2024-2-11T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-11T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'استمر على هدفك يابطل وامش ٥٢ دقائق ٣ ايام بالأسبوع​',
                        'start': {
                            'dateTime': '2024-2-18T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-18T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'افتح عداد الخطوات تطبيق صحتي وانطلق !!🏃🏻‍♂️​                            ',
                        'start': {
                            'dateTime': '2024-2-20T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-20T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'تحدى نفسك اليوم! ​جرب أي نشاط بدني جديد، مثل لعبة بادل أو الكوره - دراجة - نط الحبل​',
                        'start': {
                            'dateTime': '2024-11-23T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-11-23T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'كفو عليك وصلت لآخر أسبوع بهذا الشهر زودها  ٣ دقائق وخلها ٥٥​',
                        'start': {
                            'dateTime': '2024-2-25T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-25T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'مّدد خطواتك وعزز صحتك ومزاجك واطلع امشي ',
                        'start': {
                            'dateTime': '2024-2-28T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-28T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'هدفك في هذا الأسبوع​ الاستمرار على ٥٥ دقيقة مشي ​ مايحتاج نوصيك بتسخين عضلاتك وتهيئ جسمك قبل  تمشي​',
                        'start': {
                            'dateTime': '2024-3-3T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-3T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'جاء الوقت ارفع هدفك ​ دقيقتين وخلها ٥٧',
                        'start': {
                            'dateTime': '2024-3-10T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-10T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': ':رمضان كريم🤍​خل رمضان هذا غير  وتحدى أصدقائك أو عائلتك مين أكثر واحد عدد خطوات خلال شهر رمضان​',
                        'start': {
                            'dateTime': '2024-3-12T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'تذكر المشي إلى المسجد صحة وأجر​',
                        'start': {
                            'dateTime': '2024-3-14T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-14T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'زود ٣ دقائق على هدفك يابطل وامش ٦٠ دقائق ​',
                        'start': {
                            'dateTime': '2024-3-17T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-17T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'لا تنسَ تشرب ماء ، قبل تمشي اليوم .​',
                        'start': {
                            'dateTime': '2024-3-19T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'كملت عدد خطواتك لليوم ؟  يمديك تلحق ​ جرب تقسم مشيك على دفعات مثلًا ١٠ دقائق على مدار اليوم حتى توصل لهدفك​',
                        'start': {
                            'dateTime': '2024-3-22T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-22T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'كفو عليك وصلت لآخر أسبوع بهذا الشهر استمر على ٦٠ د، ٣ايام بالأسبوع​',
                        'start': {
                            'dateTime': '2024-11-24T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-11-24T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'مّدد خطواتك وعزز صحتك ومزاجك واطلع امشي وشارك أحد أصدقائك متعة المشي  ​',
                        'start': {
                            'dateTime': '2024-3-28T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-28T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'مبرووووك ... وصلت لـ٦٠ دقيقة 🎉 👏🏻 ​ إنجاز يفتخر فيه فلا تنسَ تكافئ نفسك  👏🏻​وبهذه المناسبة بنغير أسلوب تحدي للشهر الجاي​',
                        'start': {
                            'dateTime': '2024-3-31T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-31T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },

                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': "قطعنا مشوار طويل وممتع مع بعض ووصلنا للأسبوع رقم ٣٤ من تحقيق الخطوات والإنجازا🎖️❤️​لذلك الشهر هذا بنرفع الحماس وعدد الأيام ​  مستعد؟! 🤩​",
                        'start': {
                            'dateTime': '2024-4-1T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': "هدفك في هذا الأسبوع​ مشي مابين ٣٠ إلى ٦٠ دقيقة باليوم،  ٤ ايام بالاسبوع​",
                        'start': {
                            'dateTime': '2024-4-2T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-2T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': "كيف تتعامل مع آلام العضلات​ بعد التمرين؟​ - أكثر من السوائل.​ - مارس بعض تمارين الإطالة الخفيفة.​ - جرب الكمادات الدافئة أو الثلج لتخفيف الألم.​- جرب الجاكوزي وقم بتدليك مكان الألم.​",
                        'start': {
                            'dateTime': '2024-4-4T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-4T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': "كمل على ٣٠~ ٦٠ دقيقة ، ٤ ايام بالأسبوع     ",
                        'start': {
                            'dateTime': '2024-4-7T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-7T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': ":لو كنت مستثقل أو مشغول عن المشي اليوم، ابدا بكره من بدري أو جرب طريقة تقسيم المشي على مدار اليوم​",
                        'start': {
                            'dateTime': '2024-4-8T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-8T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': "صباحك صحة،​ كمل احتفالات العيد مع  أحبابك وشاركهم متعة المشي في أقرب ممشى لكم​",
                        'start': {
                            'dateTime': '2024-4-12T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': "كمل على ٣٠~ ٧٠ دقيقة ، ٤ ايام بالأسبوع  ",
                        'start': {
                            'dateTime': '2024-4-14T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-14T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': "خذ لك بريك ١٠ دقائق من تمارين التمدد​",
                        'start': {
                            'dateTime': '2024-4-16T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-16T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': "صباحك نشاط وصحة ​1. اختر الحذاء الداعم 👟  2. ‏وحدد وجهتك🎯​ 3. ‏وانطلق 📢🏃🏻​210:استمر على ٣٠~ ٧٠ دقيقة ، ٤ ايام بالأسبوع",
                        'start': {
                            'dateTime': '2024-4-19T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': "استمر على ٣٠~ ٧٠ دقيقة ، ٤ ايام بالأسبوع     ​",
                        'start': {
                            'dateTime': '2024-4-21T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-21T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': "كفو عليك وصلت لآخر أسبوع​  بهذا الشهر استمر على ٣٠~ ٧٠ دقيقة ، ٤ ايام بالأسبوع​",
                        'start': {
                            'dateTime': '2024-4-28T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-28T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': "جمعة مباركة🤍​       كم خطوة مشيت اليوم؟ شاركنا  على #امش30​",
                        'start': {
                            'dateTime': '2024-5-3T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-3T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': "هدفك في هذا الأسبوع​  مشي مابين ٣٠ إلى ٧٠ دقيقة باليوم،  ٥ ايام بالاسبوع​",
                        'start': {
                            'dateTime': '2024-5-5T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-5T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': "‏ لصحة الجسد، وصحة العلاقات: شارك عائلتك اليوم متعة المشي في أقرب حديقة  أو ممشى 👨‍👩‍👧‍👦​",
                        'start': {
                            'dateTime': '2024-5-10T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-10T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': "كمل على ٣٠~ ٧٠ دقيقة ، ٥ ايام بالأسبوع     ​",
                        'start': {
                            'dateTime': '2024-5-12T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': '​صباحك نشاط وحركة   ‏كل خطوة تمشيها تنعكس على صحتك، لا ينتهي يومك بدون مشي​',
                        'start': {
                            'dateTime': '2024-5-17T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-17T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'استمر على ٣٠~ ٧٠ دقيقة ، ٥ ايام بالأسبوع​',
                        'start': {
                            'dateTime': '2024-5-19T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'إذا كنت مشغول اليوم جرب تقسم مشيك على دفعات مثلًا ١٠ دقائق على مدار اليوم حتى توصل لهدفك​',
                        'start': {
                            'dateTime': '2024-5-21T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-21T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'خلنا معك وأنت تمشي 🏃🏻، ​  واسمع  بودكاست #عش_بصحة 🎧​ https://bit.ly/3uGoNwI​',
                        'start': {
                            'dateTime': '2024-5-23T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-23T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'كفو عليك وصلت لآخر أسبوع​   بهذا الشهر استمر على ٣٠~ ٧٠ دقيقة ، ٥ ايام بالأسبوع​',
                        'start': {
                            'dateTime': '2024-5-26T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-26T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'وصلنا لأخر شهر من التذكيرات بنشتاق لك😢❤️ فخورين فيك حققت انجاز عظيم بـ١٠ شهور بس قدرت تبدأ من الصفر حتى ٦٠ دقيقة مشي!!​ بهذه المناسبة هدفك هذا الشهر بيكون مختلف،أنت تحدده، عندك خيارين: تزيد المدة أو الأيام  أو تحافظ على مستواك​  مستعد!؟🤩❤️​',
                        'start': {
                            'dateTime': '2024-6-1T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'حدد خطتك وأهدافك لهذا الشهر كامل ​وانطلق!!🏃🏻‍♂️​',
                        'start': {
                            'dateTime': '2024-6-2T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-2T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': '•حدد هدفك​ • اصنع خطة ​• ابدأ بشيء بسيط وتدرج​•  أزل المعوقات ​• جهز بيئتك ​• تابع تقدمك واستعد للتحديات​ • احتفل بالنجاحات ​',
                        'start': {
                            'dateTime': '2024-6-4T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-4T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'شاركنا هدفك لهذا الأسبوع على هاشتاق #امش٣٠​',
                        'start': {
                            'dateTime': '2024-6-9T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-9T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'حددت خطتك وطبقتها؟ كل اللي عليك تراقب أدائك، تابع نبضات قلبك، مدة تمرينك و مدى لياقتك.​',
                        'start': {
                            'dateTime': '2024-6-12T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'كيف تستمر على اتباع سلوك المشي؟ ​  -بسط السلوك، قسم المشي على دفعات على مدار اليوم​  - اصنع  بيئة محفزة. ​ -اجعل الإشارة واضحة، استخدم تطبيقات تتبّع العادات أو منبه لتذكيرك ​',
                        'start': {
                            'dateTime': '2024-6-17T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-17T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'صباحك صحة،​ كمل احتفالات العيد مع  أحبابك وشاركهم متعة المشي في أقرب ممشى لكم​',
                        'start': {
                            'dateTime': '2024-6-21T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-21T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'تابع تقدمك واستعد للتحديات، كن مرن ولا تخف من تعديل أو تغيير خططك وأهدافك عند مواجهة عقبات أو صعوبات ​',
                        'start': {
                            'dateTime': '2024-6-25T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-25T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'ناوي',
                        'location': 'Online',
                        'description': 'وصلنا لنهاية مشوارنا معاك لكن مشوارك مع المشي ما إنتهى. الكرة بملعبك الآن، صار عندك القدرة والمهارات لممارسة المشي والمحافظة عليه​ استمر ولا توقف 🏃🏻‍♂️💪🏼​',
                        'start': {
                            'dateTime': '2024-6-30T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-30T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },


                ];
            }
            else if (totalValue >= 6 && totalValue <= 12) {
                var events = [
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'شهر جديد وإنجازات جديدة  كيف كان الشهر اللي فات سهل صح؟ هذا الشهر بيكون اسهل ان شاء الله​',
                        'start': {
                            'dateTime': '2023-11-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'هدفك في هذا الأسبوع​٢٢ دقيقة مشي  ٣ أيام بالأسبوع​ لا تنسَ ​ تمارين التمدد ',
                        'start': {
                            'dateTime': '2023-11-5T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-5T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'قيس تطور أدائك، تابع  نبضات قلبك، مدة تمرينك و مدى لياقتك.​       ​',
                        'start': {
                            'dateTime': '2023-11-7T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-7T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'تحدى نفسك وأصدقائك،  مين عنده اللياقة أعلى ؟​  تقدرون تستخدمون تطبيق صحتي لحساب عدد الخطوات​',
                        'start': {
                            'dateTime': '2023-11-10T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-10T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'زود دقيقتين على هدفك يابطل  وامش ٢٤ دقائق ​',
                        'start': {
                            'dateTime': '2023-11-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'اليوم غيّر خطتك وتوجه للمسجد مشي .. صحة وأجر💪🏼​ ‏وجمعتك مباركة​',
                        'start': {
                            'dateTime': '2023-11-17T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-17T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'جاء الوقت ارفع هدفك وزود​    ٣ دقائق وخلها ٢٧       ​',
                        'start': {
                            'dateTime': '2023-11-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'الجو جميل وكل بخاطرة يمشي جرّب تروح اليوم مع أطفالك أو أخوانك إلى الحديقة ​',
                        'start': {
                            'dateTime': '2023-11-24T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-24T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'كفو عليك وصلت لآخر أسبوع​  بهذا الشهر زودها  ٣ دقائق ​   وخلها ٣٠​',
                        'start': {
                            'dateTime': '2023-11-26T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-26T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'مبروووك ... وصلت لـ٣٠ دقيقة 🎉 👏🏻 ​ كفو والله، لا تنسَ تكافئ نفسك بعد الخطوات اللي مشيتها 👏🏻​',
                        'start': {
                            'dateTime': '2023-11-30T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-30T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'هدفك في هذا الأسبوع​33 دقيقة مشي ​لا تنسَ ​ تمارين الاستطالة والإحماء​',
                        'start': {
                            'dateTime': '2023-12-3T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-3T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'صباحك صحّة ✋، ​ ‏جرب تشارك أهلك متعة المشي لمدة نصف ساعة ​',
                        'start': {
                            'dateTime': '2023-12-8T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-8T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'زود دقيقتين على هدفك يابطل وامش 35 دقيقة​',
                        'start': {
                            'dateTime': '2023-12-10T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-10T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'جرب توقف اليوم بعيد، وكملها مشي للدوام.​',
                        'start': {
                            'dateTime': '2023-12-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'قسم مشيك على دفعات مثلًا ١٠ دقائق على مدار اليوم حتى توصل لهدفك​',
                        'start': {
                            'dateTime': '2023-12-15T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-15T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'ارفع هدفك يا بطل وامش  ٣٨دقيقة  ٣ ايام بالأسبوع                ​',
                        'start': {
                            'dateTime': '2023-12-17T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-17T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'بشر، حققت الهدف هذا الأسبوع ؟🤩​ في حال ما قدرت توصل لهدفك، عادي كمل على الجدول ، و أضف له أسبوع.​',
                        'start': {
                            'dateTime': '2023-12-22T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-22T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'كفو عليك وصلت لآخر أسبوع بهذا الشهر  زودها دقيقتين وخلها  ٤٠د ​',
                        'start': {
                            'dateTime': '2023-12-24T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-24T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'تحس عضلاتك شاده؟ لا تنسَ • سخن جسمك قبل التمرين​ • مدد عضلاتك بعد التمرين​',
                        'start': {
                            'dateTime': '2023-12-26T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-26T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'اشحن طاقتك وامشي مع أصدقائك وتحدى عائلتك!​',
                        'start': {
                            'dateTime': '2023-12-29T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-29T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'هدفك في هذا الأسبوع​٤٢ دقيقة مشي ​لا تنسَ ​تمارين الاستطالة والإحماء​',
                        'start': {
                            'dateTime': '2023-12-31T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-31T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': ' 3 عناصر تؤثر على أدائك في التمرين:​-نومك​ -تغذيتك خلال اليوم​ -شربك للماء​',
                        'start': {
                            'dateTime': '2024-1-4T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-4T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'زود دقيقتين على هدفك يابطل وامش ٤٤ دقيقة ​',
                        'start': {
                            'dateTime': '2024-1-7T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-7T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'جمعة مباركة🤍​ كم خطوة مشيت اليوم؟ شاركنا  على #امش30​',
                        'start': {
                            'dateTime': '2024-1-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'جاء الوقت ارفع هدفك وزود​ ٣ دقائق وخلها ٤٧ دقيقة​',
                        'start': {
                            'dateTime': '2024-1-14T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-14T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'لا تنسَ تشرب ماء ، قبل تمشي اليوم .​',
                        'start': {
                            'dateTime': '2024-1-16T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-16T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'جرّب تروح اليوم مع أطفالك أو أخوانك إلى الحديقة ​',
                        'start': {
                            'dateTime': '2024-1-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'استمر على هدفك يابطل​ وامش ٤٧ دقيقة، ٣ ايام بالأسبوع ​',
                        'start': {
                            'dateTime': '2024-1-21T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-21T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'حدد يوم في الأسبوع تمارس فيه الرياضة مع أطفالك ،أو إخوانك، مثل ​المشي -القفز  على الحبل- الدراجات- كرة قدم​',
                        'start': {
                            'dateTime': '2024-1-26T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-26T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'كفو عليك وصلت لآخر أسبوع بهذا الشهر زودها  ٣ دقائق وخلها ٥٠دقيقة​',
                        'start': {
                            'dateTime': '2024-1-28T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-28T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'وصلنا اسبوع ٢٢ من التزامك وحرصك على تحقيق أهدافك فخورين فيك!هدفك في هذا الأسبوع ٥٠ دقيقة مشي ٣  ايام بالأسبوع​',
                        'start': {
                            'dateTime': '2024-2-4T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-4T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'صباحك نشاط وصحة ​1. اختر الحذاء المناسب👟 ​2. ‏وحدد وجهتك🎯​ 3. ‏وانطلق 📢🏃🏻​',
                        'start': {
                            'dateTime': '2024-2-6T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-6T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'اجمع الاثنين!​   اقضِ وقتك مع أطفالك ، ومارسوا الرياضة معا.​',
                        'start': {
                            'dateTime': '2024-2-9T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-9T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'جاء الوقت ارفع هدفك وزود دقيقتين وخلها ٥٢                 ​',
                        'start': {
                            'dateTime': '2024-2-11T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-11T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'صباحك صحة وإنجاز 🤩❤️​    المشي يساعد على التفكير.. جّرب تمشي قبل تنجز مهامك ​',
                        'start': {
                            'dateTime': '2024-2-14T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-14T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'استمر على هدفك يابطل​  وامش ٥٢ دقائق ٣ ايام بالأسبوع​',
                        'start': {
                            'dateTime': '2024-2-18T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-18T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'افتح عداد الخطوات تطبيق صحتي وانطلق !!🏃🏻‍♂️​',
                        'start': {
                            'dateTime': '2024-2-20T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-20T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'تحدى نفسك اليوم! ​   جرب أي نشاط بدني جديد، مثل لعبة بادل أو الكوره - دراجة - نط الحبل​',
                        'start': {
                            'dateTime': '2024-2-23T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-23T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'كفو عليك وصلت لآخر أسبوع بهذا الشهر زودها  ٣ دقائق وخلها ٥٥​',
                        'start': {
                            'dateTime': '2024-2-25T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-25T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'هدفك في هذا الأسبوع​ الاستمرار على ٥٥ دقيقة مشي  مايحتاج نوصيك بتسخين عضلاتك وتهيئ جسمك قبل  تمشي​',
                        'start': {
                            'dateTime': '2024-3-3T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-3T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'جاء الوقت ارفع هدفك ​دقيقتين وخلها 57 دقيقة.            ​',
                        'start': {
                            'dateTime': '2024-3-10T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-10T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'رمضان كريم🤍​ خل رمضان هذا غير  وتحدى أصدقائك أو عائلتك مين أكثر واحد عدد خطوات خلال شهر رمضان​',
                        'start': {
                            'dateTime': '2024-3-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'تذكر المشي إلى المسجد صحة وأجر​',
                        'start': {
                            'dateTime': '2024-3-14T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-14T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'زود ٣ دقائق على هدفك يابطل وامش ٦٠ دقيقة ​',
                        'start': {
                            'dateTime': '2024-3-17T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-17T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'كملت عدد خطواتك لليوم ؟  يمديك تلحق ​  جرب تقسم مشيك على دفعات مثلًا ١٠ دقائق على مدار اليوم حتى توصل لهدفك​',
                        'start': {
                            'dateTime': '2024-3-22T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-22T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'كفو عليك وصلت لآخر أسبوع بهذا الشهر استمر على ٦٠ د، ٣ايام بالأسبوع​',
                        'start': {
                            'dateTime': '2024-3-24T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-24T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'مّدد خطواتك وعزز صحتك ومزاجك واطلع امشي وشارك أحد أصدقائك متعة المشي  ​',
                        'start': {
                            'dateTime': '2024-3-27T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-27T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'مبرووووك ... وصلت لـ٦٠ دقيقة 🎉 👏🏻 ​       إنجاز يفتخر فيه فلا تنسَ تكافئ نفسك  👏🏻​ وبهذه المناسبة بنغير أسلوب تحدي للشهر الجاي​',
                        'start': {
                            'dateTime': '2024-3-31T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-31T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'قطعنا مشوار طويل وممتع مع بعض ووصلنا للأسبوع رقم ٣٤ من تحقيق الخطوات والأهداف  🎖️❤️​ لذلك الشهر هذا بنرفع الحماس وعدد الأيام ​ مستعد؟! 🤩​',
                        'start': {
                            'dateTime': '2024-4-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': "هدفك في هذا الأسبوع​ مشي مابين ٣٠ إلى ٦٠ دقيقة باليوم،  ٤ ايام بالاسبوع​",
                        'start': {
                            'dateTime': '2024-4-2T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-2T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': ":لو كنت مستثقل أو مشغول عن المشي اليوم، ابدا بكره من بدري أو جرب طريقة تقسيم المشي على مدار اليوم​",
                        'start': {
                            'dateTime': '2024-4-8T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-8T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': "كمل على ٣٠~ ٦٠ دقيقة ، ٤ ايام بالأسبوع     ",
                        'start': {
                            'dateTime': '2024-4-7T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-7T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'صباحك صحة، كمل احتفالات العيد مع  أحبابك وشاركهم متعة المشي في أقرب ممشى لكم​',
                        'start': {
                            'dateTime': '2024-4-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': '',
                        'description': "كمل على ٣٠~ ٧٠ دقيقة ، ٤ ايام بالأسبوع  ",
                        'start': {
                            'dateTime': '2024-4-14T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-14T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': "خذ لك بريك ١٠ دقائق من تمارين التمدد​",
                        'start': {
                            'dateTime': '2024-4-16T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-16T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': "صباحك نشاط وصحة ​1. اختر الحذاء الداعم 👟  2. ‏وحدد وجهتك🎯​ 3. ‏وانطلق 📢🏃🏻​210:استمر على ٣٠~ ٧٠ دقيقة ، ٤ ايام بالأسبوع",
                        'start': {
                            'dateTime': '2024-4-19T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': "استمر على ٣٠~ ٧٠ دقيقة ، ٤ ايام بالأسبوع     ​",
                        'start': {
                            'dateTime': '2024-4-21T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-21T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'أحرص على ممارسة تمارين  تقوية العضلات 💪 ​على الأقل مرتين في الأسبوع​',
                        'start': {
                            'dateTime': '2024-4-27T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-27T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': "كفو عليك وصلت لآخر أسبوع​  بهذا الشهر استمر على ٣٠~ ٧٠ دقيقة ، ٤ ايام بالأسبوع​",
                        'start': {
                            'dateTime': '2024-4-28T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-28T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': "جمعة مباركة🤍​       كم خطوة مشيت اليوم؟ شاركنا  على #امش30​",
                        'start': {
                            'dateTime': '2024-5-3T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-3T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': "هدفك في هذا الأسبوع​  مشي مابين ٣٠ إلى ٧٠ دقيقة باليوم،  ٥ ايام بالاسبوع​",
                        'start': {
                            'dateTime': '2024-5-5T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-5T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': "‏ لصحة الجسد، وصحة العلاقات: شارك عائلتك اليوم متعة المشي في أقرب حديقة  أو ممشى 👨‍👩‍👧‍👦​",
                        'start': {
                            'dateTime': '2024-5-10T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-10T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': "كمل على ٣٠~ ٧٠ دقيقة ، ٥ ايام بالأسبوع     ​",
                        'start': {
                            'dateTime': '2024-5-12T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'غير مكان مشيك المعتاد اطلع لحديقة أو سوق أو امش في البيت ​',
                        'start': {
                            'dateTime': '2024-5-14T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-14T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'صباحك نشاط وحركة ​ كل خطوة تمشيها تنعكس على صحتك، لا ينتهي يومك بدون مشي​ ',
                        'start': {
                            'dateTime': '2024-5-17T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-17T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'استمر على ٣٠~ ٧٠ دقيقة ، ٥ ايام بالأسبوع​',
                        'start': {
                            'dateTime': '2024-5-19T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'إذا كنت مشغول اليوم جرب تقسم مشيك على دفعات مثلًا ١٠ دقائق على مدار اليوم حتى توصل لهدفك​',
                        'start': {
                            'dateTime': '2024-5-21T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-21T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'كفو عليك وصلت لآخر أسبوع​   بهذا الشهر استمر على ٣٠~ ٧٠ دقيقة ، ٥ ايام بالأسبوع​',
                        'start': {
                            'dateTime': '2024-5-26T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-26T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'لا تنسَ تشرب ماء ، قبل تمشي اليوم .​',
                        'start': {
                            'dateTime': '2024-5-29T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-29T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'وصلنا لأخر شهر من التذكيرات بنشتاق لك😢❤️ فخورين فيك حققت انجاز عظيم بـ١٠ شهور بس قدرت تبدأ من الصفر حتى ٦٠ دقيقة مشي!!​ بهذه المناسبة هدفك هذا الشهر بيكون مختلف،أنت تحدده، عندك خيارين: تزيد المدة أو الأيام  أو تحافظ على مستواك​  مستعد!؟🤩❤️​',
                        'start': {
                            'dateTime': '2024-6-1T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'حدد خطتك وأهدافك لهذا الشهر كامل ​وانطلق!!🏃🏻‍♂️​',
                        'start': {
                            'dateTime': '2024-6-2T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-2T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': '•حدد هدفك​ • اصنع خطة ​• ابدأ بشيء بسيط وتدرج​•  أزل المعوقات ​• جهز بيئتك ​• تابع تقدمك واستعد للتحديات​ • احتفل بالنجاحات ​',
                        'start': {
                            'dateTime': '2024-6-4T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-4T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'شاركنا هدفك لهذا الأسبوع على هاشتاق #امش٣٠​',
                        'start': {
                            'dateTime': '2024-6-9T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-9T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'حددت خطتك وطبقتها؟ كل اللي عليك تراقب أدائك، تابع نبضات قلبك، مدة تمرينك و مدى لياقتك.​',
                        'start': {
                            'dateTime': '2024-6-12T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'صباحك صحة،​ كمل احتفالات العيد مع  أحبابك وشاركهم متعة المشي في أقرب ممشى لكم​',
                        'start': {
                            'dateTime': '2024-6-21T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-21T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'تابع تقدمك واستعد للتحديات، كن مرن ولا تخف من تعديل أو تغيير خططك وأهدافك عند مواجهة عقبات أو صعوبات ​',
                        'start': {
                            'dateTime': '2024-6-25T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-25T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'بادي',
                        'location': 'Online',
                        'description': 'وصلنا لنهاية مشوارنا معاك لكن مشوارك مع المشي ما إنتهى. الكرة بملعبك الآن، صار عندك القدرة والمهارات لممارسة المشي والمحافظة عليه',
                        'start': {
                            'dateTime': '2024-6-30T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-30T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                ];
            }

            else if (totalValue >= 18 && totalValue <= 26) {
                var events = [
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': ':شهر جديد وإنجازات جديدة  كيف كان الشهر اللي فات سهل صح؟ هذا الشهر بيكون اسهل ان شاء الله​',
                        'start': {
                            'dateTime': '2023-11-1T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'هدفك في هذا الأسبوع​٣٦ دقيقة مشي ​لا تنسَ ​ تمارين التمدد ​',
                        'start': {
                            'dateTime': '2023-11-5T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-5T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'قيس تطور أدائك، تابع  نبضات قلبك، مدة تمرينك و مدى لياقتك.​       ​',
                        'start': {
                            'dateTime': '2023-11-7T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-7T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'زود دقيقتين على هدفك يابطل وامش ٣٨ دقائق ​',
                        'start': {
                            'dateTime': '2023-11-12T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'اليوم غيّر خطتك وتوجه للمسجد مشي .. صحة وأجر💪🏼​      ‏وجمعتك مباركة',
                        'start': {
                            'dateTime': '2023-11-17T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-17T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'جاء الوقت ارفع هدفك وزود​    ٣ دقائق وخلها ٢٧       ​',
                        'start': {
                            'dateTime': '2023-11-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'الجو جميل وكل بخاطرة يمشي​ جرّب تروح اليوم مع أطفالك أو أخوانك إلى الحديقة ​',
                        'start': {
                            'dateTime': '2023-11-24T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-24T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': "كفو عليك وصلت لآخر أسبوع بهذا الشهر زودها  ٣ دقائق  وخلها 43",
                        'start': {
                            'dateTime': '2023-11-26T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-26T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'لا تنسَ تشرب ماء ، قبل تمشي اليوم .​',
                        'start': {
                            'dateTime': '2023-11-28T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-28T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': "شهر جديد وإنجازات جديدة كيف كان الشهر اللي فات سهل صح؟ هذا الشهر بيكون اسهل ان شاء الله",
                        'start': {
                            'dateTime': '2023-12-1T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'هدفك في هذا الأسبوع​    ٤٥ دقيقة مشي لا تنسَ  تمارين الاستطالة والإحماء​',
                        'start': {
                            'dateTime': '2023-12-3T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-3T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': ':قسم مشيك على دفعات مثلًا ١٠ دقائق على مدار اليوم حتى توصل لهدفك​',
                        'start': {
                            'dateTime': '2023-12-5T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-5T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'صباحك صحّة ✋، ​ ‏جرب تشارك أهلك متعة المشي لمدة نصف ساعة ​',
                        'start': {
                            'dateTime': '2023-12-8T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-8T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'استمر على ٤٥ دقيقة ​',
                        'start': {
                            'dateTime': '2023-12-10T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-10T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': '‏ لصحة الجسد، وصحة العلاقات: شارك عائلتك اليوم متعة المشي في أقرب حديقة  أو ممشى 👨‍👩‍👧‍👦​',
                        'start': {
                            'dateTime': '2023-12-15T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-15T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'جاء الوقت ارفع هدفك وزود​ ٣ دقائق وخلها ٣٥         ',
                        'start': {
                            'dateTime': '2023-12-17T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-17T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': ':كيف تستمر وتحافظ على سلوك المشي؟​ • غير بيئتك المحيطة، أو كن مؤثرا فيهم .• زود الحركة بتفاصيل يومك​ • غير مكان مشيك من فترة لفترة​ • امشِ مع أحد تحبه.​',
                        'start': {
                            'dateTime': '2023-12-19T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': "بشر، حققت الهدف هذا الأسبوع ؟🤩​في حال ما قدرت توصل لهدفك، عادي كمل على جدول ، و أضف له أسبوع.​",
                        'start': {
                            'dateTime': '2023-12-22T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-22T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'كفو عليك وصلت لآخر أسبوع بهذا الشهر  ٣٨دقيقة في ٣ايام بالأسبوع​',
                        'start': {
                            'dateTime': '2023-12-24T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-24T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'تحس عضلاتك شاده؟ لا تنسَ ​ • سخن جسمك قبل التمرين​ • مدد عضلاتك بعد التمرين​',
                        'start': {
                            'dateTime': '2023-12-26T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-26T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'اشحن طاقتك وامشي مع أصدقائك وتحدى عائلتك!​',
                        'start': {
                            'dateTime': '2023-12-29T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-29T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'هدفك في هذا الأسبوع​    ٥٠ دقيقة مشي لا تنسَ  تمارين الاستطالة والإحماء​',
                        'start': {
                            'dateTime': '2024-1-1T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'حدد يوم في الأسبوع تمارس فيه الرياضة مع أطفالك ،أو إخوانك، مثل ​المشي -القفز  على الحبل- الدراجات- كرة قدم​',
                        'start': {
                            'dateTime': '2024-1-4T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-4T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'زود دقيقتين على هدفك يابطل وامش 52 دقيقة ​',
                        'start': {
                            'dateTime': '2024-1-7T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-7T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'سمعت حلقة بودكاست الجديدة من (عش بصحة )؟​ لا تفوتك ، حملها واسمعها، وأنت تمشي​',
                        'start': {
                            'dateTime': '2024-1-9T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-9T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'جمعة مباركة🤍​ كم خطوة مشيت اليوم؟ شاركنا  على #امش30​',
                        'start': {
                            'dateTime': '2023-1-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-1-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'استمر على هدفك يابطل​ وامش 52 دقائق​',
                        'start': {
                            'dateTime': '2024-1-14T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-14T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'لا تنسَ تشرب ماء ، قبل تمشي اليوم .​',
                        'start': {
                            'dateTime': '2024-1-16T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-16T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'جرّب تروح اليوم مع أطفال عائلتك إلى الحديقة ​',
                        'start': {
                            'dateTime': '2024-1-19T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'استمر على هدفك يابطل​  وامش ٥٢ د ٣ ايام بالأسبوع ​',
                        'start': {
                            'dateTime': '2024-1-21T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-21T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'خذ لك بريك ١٠ دقائق من تمارين التمدد​',
                        'start': {
                            'dateTime': '2024-1-25T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-25T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'كفو عليك وصلت لآخر أسبوع بهذا الشهر زودها  ٣ دقائق وخلها ٥٥​',
                        'start': {
                            'dateTime': '2024-1-28T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-28T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'صباحك صحة وإنجاز 🤩❤️​ حافظ على صحتك واستمر بتحقيق خطواتك! 🤩​',
                        'start': {
                            'dateTime': '2024-2-2T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-2T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'وصلنا اسبوع ٢٢ من التزامك وحرصك على تحقيق أهدافك فخورين فيك!​ هدفك في هذا الأسبوع​ ٥٠ دقيقة مشي ٣  ايام بالأسبوع​',
                        'start': {
                            'dateTime': '2024-2-4T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-4T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },



                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'اجمع الاثنين!​ اقضِ وقتك مع احبابك ، ومارسوا الرياضة معا.​',
                        'start': {
                            'dateTime': '2024-2-9T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-9T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'استمر على هدفك يابطل وامش ٥٥ دقائق ٣ ايام بالأسبوع              ​',
                        'start': {
                            'dateTime': '2024-2-11T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-11T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'صباحك صحة وإنجاز 🤩❤️​    المشي يساعد على التفكير.. جّرب تمشي قبل تنجز مهامك ​',
                        'start': {
                            'dateTime': '2024-2-14T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-14T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': '​ جاء الوقت ارفع هدفك وزود دقيقتين وخلها ٥٧   ​',
                        'start': {
                            'dateTime': '2024-2-18T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-18T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'مبروووك ... وصلت لـ٦٠ دقيقة 🎉 👏🏻 ​  كفو والله، لا تنسَ تكافئ نفسك بعد الخطوات اللي مشيتها 👏🏻​',
                        'start': {
                            'dateTime': '2024-2-29T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-29T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'هدفك في هذا الشهر   الاستمرار على ٦٠ دقيقة مشي لكن ٤ أيام بالأسبوع​',
                        'start': {
                            'dateTime': '2024-3-3T11:00:00',
                            'timeZone': 'America/Los_Angeles'
                        },
                        'end': {
                            'dateTime': '2024-3-3T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'استمر على ٦٠ دقيقة مشي ٤ أيام بالأسبوع​',
                        'start': {
                            'dateTime': '2024-3-10T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-10T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'رمضان كريم🤍​ خل رمضان هذا غير  وتحدى أصدقائك أو عائلتك مين أكثر واحد عدد خطوات خلال شهر رمضان​',
                        'start': {
                            'dateTime': '2024-3-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'حمل كتاب صوتي أو بودكاست وأنطلق 🏃🏻‍♂️​',
                        'start': {
                            'dateTime': '2024-3-14T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-14T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'لا تنسَ تشرب ماء ، قبل تمشي اليوم .​',
                        'start': {
                            'dateTime': '2024-3-19T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'كملت عدد خطواتك لليوم ؟  يمديك تلحق ​  جرب تقسم مشيك على دفعات مثلًا ١٠ دقائق على مدار اليوم حتى توصل لهدفك​',
                        'start': {
                            'dateTime': '2024-3-22T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-22T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'كفو عليك وصلت لآخر أسبوع بهذا الشهر استمر على ٦٠ د ٤ايام بالأسبوع​',
                        'start': {
                            'dateTime': '2024-3-24T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-24T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'تذكر المشي إلى المسجد صحة وأجر​',
                        'start': {
                            'dateTime': '2024-3-26T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-26T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'مّدد خطواتك وعزز صحتك ومزاجك واطلع امشي وشارك أحد أصدقائك متعة المشي  ​',
                        'start': {
                            'dateTime': '2024-3-29T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-29T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'وصلنا للأسبوع رقم ٣٠ من تحقيق الإنجازات والأهداف 🎖️❤️بهذه المناسبة هدفنا هذه ٣ شهور بيكون غير،​أنت اللي تحدده، بيكون عندك خيارين يا تزيد المدة أو يوم أو المحافظة على مستواك.​مستعد!؟🤩​',
                        'start': {
                            'dateTime': '2024-4-1T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'حدد خطتك وأهدافك لهذا لمدة ٣ شهور وانطلق!!🏃🏻‍♂️​',
                        'start': {
                            'dateTime': '2024-4-2T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-2T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': '•حدد هدفك​ • اصنع خطة ​• ابدأ بشيء بسيط وتدرج​•  أزل المعوقات ​• جهز بيئتك ​• تابع تقدمك واستعد للتحديات​ • احتفل بالنجاحات ​',
                        'start': {
                            'dateTime': '2023-4-3T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-4-3T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'شاركنا هدفك لهذا الأسبوع على هاشتاق #امش٣٠​',
                        'start': {
                            'dateTime': '2024-4-5T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-5T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'لو كنت مستثقل أو مشغول عن المشي اليوم، ابدا بكره من بدري أو جرب طريقة تقسيم المشي على مدار اليوم​',
                        'start': {
                            'dateTime': '2024-4-8T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-8T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'صباحك صحة،كمل احتفالات العيد مع  أحبابك وشاركهم متعة المشي في أقرب ممشى لكم​',
                        'start': {
                            'dateTime': '2024-4-12T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'خذ لك بريك ١٠ دقائق من تمارين التمدد​',
                        'start': {
                            'dateTime': '2024-4-16T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-16T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'صباحك نشاط وصحة ​1. اختر الحذاء الداعم 👟 ​2. ‏وحدد وجهتك🎯​3. ‏وانطلق 📢🏃🏻​',
                        'start': {
                            'dateTime': '2024-4-19T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'وصلت لآخر أسبوع بهذا الشه     لا تنسَ  تتابع تقدمك واستعد للتحديات​',
                        'start': {
                            'dateTime': '2024-4-21T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-21T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'صباحك صحة وإنجاز 🤩❤️​    كم خطوة مشيت اليوم؟ شاركنا  على #امش30​',
                        'start': {
                            'dateTime': '2024-4-28T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-28T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'شهر جديد وخطوات جديدة 🤩​    هدفك هذا الشهر تحديد يوم في الأسبوع تمارس فيه الرياضة مع أطفالك أو إخوانك، مثل المشي -القفز على الحبل- الدراجات- كرة قدم- لعبة البادل​',
                        'start': {
                            'dateTime': '2024-5-1T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'تابع تقدمك واستعد للتحديات، كن مرن، لا تخف من تغيير خطتك أو اهدافك عند مواجهة عقبات أو صعوبات ​',
                        'start': {
                            'dateTime': '2024-5-7T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-7T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'جمعة مباركة🤍 كم خطوة مشيت اليوم؟ شاركنا  على #امش30​',
                        'start': {
                            'dateTime': '2024-5-10T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-10T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },

                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'غير مكان مشيك المعتاد اطلع لحديقة أو سوق أو امش في البيت ​',
                        'start': {
                            'dateTime': '2024-5-14T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-14T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': "‏ لصحة الجسد، وصحة العلاقات: شارك عائلتك اليوم متعة المشي في أقرب حديقة  أو ممشى 👨‍👩‍👧‍👦​",
                        'start': {
                            'dateTime': '2023-5-17T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-5-17T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'شاركنا هدفك لهذا الأسبوع على هاشتاق #امش٣٠​',
                        'start': {
                            'dateTime': '2024-5-19T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'جرب نشاط جديد مع والديك أو أطفالك وشاركنا على هاشتاق #امش٣٠​',
                        'start': {
                            'dateTime': '2024-5-25T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-25T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'لا تنسَ تشرب ماء ، قبل تمشي اليوم .​',
                        'start': {
                            'dateTime': '2024-5-30T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-30T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'وصلنا لأخر شهر من التذكيرات بنشتاق لك😢❤️​ وما يحتاج نوصيك اكتب خطتك وأهدافك للسنة القادمة ولا تنسَ اللي حولك وكون قدوة لهم​',
                        'start': {
                            'dateTime': '2024-6-1T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'أحرص على ممارسة تمارين  تقوية العضلات 💪 ​ على الأقل مرتين في الأسبوع​',
                        'start': {
                            'dateTime': '2024-6-4T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-4T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'كيف تتعامل مع آلام العضلات​ بعد التمرين؟​ - أكثر من السوائل.​ - مارس بعض تمارين الإطالة الخفيفة.​ - جرب الكمادات الدافئة أو الثلج لتخفيف الألم.​ - جرب الجاكوزي وقم بتدليك مكان الألم.​',
                        'start': {
                            'dateTime': '2024-6-12T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'صباحك صحة،​  كمل احتفالات العيد مع  أحبابك وشاركهم متعة المشي في أقرب ممشى لكم​',
                        'start': {
                            'dateTime': '2024-6-17T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-17T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'لا تنسَ تمارين الاستطالة والإحماء​',
                        'start': {
                            'dateTime': '2024-6-24T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-24T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'جرب رياضة اخرى اليوم غير المشي ​ اسبح - ارفع اثقال- جرب الدراجة- يوغا​',
                        'start': {
                            'dateTime': '2024-6-28T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-28T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },

                    {
                        'summary': 'منطلق',
                        'location': 'Online',
                        'description': 'وصلنا لنهاية مشوارنا معاك لكن مشوارك مع المشي ما إنتهى. الآن دورك تكمل وتكون قدوة للي حولك ما يحتاج نوصيك شاركهم متعة المشي واستمر ولا توقف 🏃🏻‍♂️💪🏼​',
                        'start': {
                            'dateTime': '2024-6-30T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-30T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                ];
            }
            else if (totalValue >= 30 && totalValue <= 50) {
                var events = [
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': ' شهر جديد وتحديات جديد  جرب تحدى نفسك وأصدقائك، مين عنده اللياقة أعلى ؟ تقدر تستخدم تطبيق صحتي لحساب عدد الخطوات​',
                        'start': {
                            'dateTime': '2023-11-1T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'هدفك في هذا الأسبوع​     ٣٦ دقيقة مشي ​ لا تنسَ   تمارين التمدد ​',
                        'start': {
                            'dateTime': '2023-11-5T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-5T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'قيس تطور أدائك، تابع  نبضات قلبك، مدة تمرينك و مدى لياقتك.​       ​',
                        'start': {
                            'dateTime': '2023-11-7T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-7T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'زود دقيقتين على هدفك يابطل وامش ٣٨ دقائق ​',
                        'start': {
                            'dateTime': '2023-11-12T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'اليوم غيّر خطتك وتوجه للمسجد مشي .. صحة وأجر💪🏼‏وجمعتك مباركة',
                        'start': {
                            'dateTime': '2023-11-17T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-17T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'جاء الوقت ارفع هدفك وزود​    ٣ دقائق وخلها 40       ​',
                        'start': {
                            'dateTime': '2023-11-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'الجو جميل وكل بخاطرة يمشي​ جرّب تروح اليوم مع أطفالك أو أخوانك إلى الحديقة ​',
                        'start': {
                            'dateTime': '2023-11-24T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-24T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': "كفو عليك وصلت لآخر أسبوع بهذا الشهر زودها  ٣ دقائق  وخلها 43",
                        'start': {
                            'dateTime': '2023-11-26T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-26T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'لا تنسَ تشرب ماء ، قبل تمشي اليوم .​',
                        'start': {
                            'dateTime': '2023-11-28T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-11-28T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': "شهر جديد وإنجازات جديدة كيف كان الشهر اللي فات سهل صح؟ هذا الشهر بيكون اسهل ان شاء الله",
                        'start': {
                            'dateTime': '2023-12-1T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'هدفك في هذا الأسبوع​    ٤٥ دقيقة مشي لا تنسَ  تمارين الاستطالة والإحماء​',
                        'start': {
                            'dateTime': '2023-12-3T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-3T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': ':قسم مشيك على دفعات مثلًا ١٠ دقائق على مدار اليوم حتى توصل لهدفك​',
                        'start': {
                            'dateTime': '2023-12-5T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-5T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'صباحك صحّة ✋، ​ ‏جرب تشارك أهلك متعة المشي لمدة نصف ساعة ​',
                        'start': {
                            'dateTime': '2023-12-8T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-8T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'استمر على ٤٥ دقيقة ​',
                        'start': {
                            'dateTime': '2023-12-10T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-10T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'بشر، حققت الهدف هذا الأسبوع ؟🤩​  في حال ما قدرت توصل لهدفك، عادي كمل على جدول ، و أضف له أسبوع.​',
                        'start': {
                            'dateTime': '2023-12-15T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-15T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'جاء الوقت ارفع هدفك وزود​ ٣ دقائق وخلها 47         ',
                        'start': {
                            'dateTime': '2023-12-17T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-17T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': '‏ لصحة الجسد، وصحة العلاقات: شارك عائلتك اليوم متعة المشي في أقرب حديقة  أو ممشى 👨‍👩‍👧‍👦​',
                        'start': {
                            'dateTime': '2023-12-21T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-21T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'كفو عليك وصلت لآخر اسبوع بهذا الشهر زودها ٣ دقائق بس! وخلها ٥٠​',
                        'start': {
                            'dateTime': '2023-12-24T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-24T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'تحس عضلاتك شاده؟ لا تنسَ ​ • سخن جسمك قبل التمرين​ • مدد عضلاتك بعد التمرين​',
                        'start': {
                            'dateTime': '2023-12-26T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-26T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'اشحن طاقتك وامشي مع أصدقائك وتحدى عائلتك!​',
                        'start': {
                            'dateTime': '2023-12-29T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-12-29T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'هدفك في هذا الأسبوع​    ٥٠ دقيقة مشي لا تنسَ  تمارين الاستطالة والإحماء​',
                        'start': {
                            'dateTime': '2024-1-1T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'حدد يوم في الأسبوع تمارس فيه الرياضة مع أطفالك ،أو إخوانك، مثل ​المشي -القفز  على الحبل- الدراجات- كرة قدم​',
                        'start': {
                            'dateTime': '2024-1-4T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-4T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'زود دقيقتين على هدفك يابطل وامش 52 دقيقة ​',
                        'start': {
                            'dateTime': '2024-1-7T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-7T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'جمعة مباركة🤍​ كم خطوة مشيت اليوم؟ شاركنا  على #امش30​',
                        'start': {
                            'dateTime': '2023-1-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-1-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'استمر على هدفك يابطل​ وامش 52 دقائق​',
                        'start': {
                            'dateTime': '2024-1-14T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-14T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'لا تنسَ تشرب ماء ، قبل تمشي اليوم .​',
                        'start': {
                            'dateTime': '2024-1-16T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-16T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'جرّب تروح اليوم مع أطفال عائلتك إلى الحديقة ​',
                        'start': {
                            'dateTime': '2024-1-19T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'استمر على هدفك يابطل​  وامش ٥٢ د ٣ ايام بالأسبوع ​',
                        'start': {
                            'dateTime': '2024-1-21T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-21T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'كفو عليك وصلت لآخر أسبوع بهذا الشهر زودها  ٣ دقائق وخلها ٥٥​',
                        'start': {
                            'dateTime': '2024-1-28T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-28T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'خذ لك بريك ١٠ دقائق من تمارين التمدد​',
                        'start': {
                            'dateTime': '2024-1-31T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-1-31T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'قوة عضلاتك، تعديل مزاجك، توازن جسمك، ولياقة قلبك، كلها تعتمد على نشاطك البدني​',
                        'start': {
                            'dateTime': '2024-2-2T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-2T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'وصلنا اسبوع ٢٢ من التزامك وحرصك على تحقيق أهدافك فخورين فيك!​ هدفك في هذا الأسبوع​ 55 دقيقة مشي ٣  ايام بالأسبوع​',
                        'start': {
                            'dateTime': '2024-2-4T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-4T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'اجمع الاثنين!​ اقضِ وقتك مع احبابك ، ومارسوا الرياضة معا.​',
                        'start': {
                            'dateTime': '2024-2-9T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-9T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'استمر على هدفك يابطل وامش ٥٥ دقائق ٣ ايام بالأسبوع              ​',
                        'start': {
                            'dateTime': '2024-2-11T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-11T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'صباحك صحة وإنجاز 🤩❤️​    المشي يساعد على التفكير.. جّرب تمشي قبل تنجز مهامك ​',
                        'start': {
                            'dateTime': '2024-2-14T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-14T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': '​ جاء الوقت ارفع هدفك وزود دقيقتين وخلها ٥٧   ​',
                        'start': {
                            'dateTime': '2024-2-18T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-18T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'افتح عداد الخطوات تطبيق صحتي وانطلق !!🏃🏻‍♂️​',
                        'start': {
                            'dateTime': '2024-2-20T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-20T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'تحدى نفسك اليوم! ​ جرب أي نشاط بدني جديد، مثل لعبة بادل أو الكوره - دراجة - نط الحبل​',
                        'start': {
                            'dateTime': '2024-2-23T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-23T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'كفو عليك وصلت لآخر أسبوع بهذه الشهر زودها  ٣ دقائق وخلها ٦٠​',
                        'start': {
                            'dateTime': '2024-2-25T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-25T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'مبروووك ... وصلت لـ٦٠ دقيقة 🎉 👏🏻 ​  كفو والله، لا تنسَ تكافئ نفسك بعد الخطوات اللي مشيتها 👏🏻​',
                        'start': {
                            'dateTime': '2024-2-29T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-2-29T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'هدفك في هذا الشهر   الاستمرار على ٦٠ دقيقة مشي لكن ٤ أيام بالأسبوع​',
                        'start': {
                            'dateTime': '2024-3-3T11:00:00',
                            'timeZone': 'America/Los_Angeles'
                        },
                        'end': {
                            'dateTime': '2024-3-3T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'حمل كتاب صوتي أو بودكاست وأنطلق 🏃🏻‍♂️​',
                        'start': {
                            'dateTime': '2024-3-6T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-6T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'استمر على ٦٠ دقيقة مشي ٤ أيام بالأسبوع​',
                        'start': {
                            'dateTime': '2024-3-10T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-10T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'رمضان كريم🤍​ خل رمضان هذا غير  وتحدى أصدقائك أو عائلتك مين أكثر واحد عدد خطوات خلال شهر رمضان​',
                        'start': {
                            'dateTime': '2024-3-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'كملت عدد خطواتك لليوم ؟  يمديك تلحق ​ جرب تقسم مشيك على دفعات مثلًا ١٠ دقائق على مدار اليوم حتى توصل لهدفك​',
                        'start': {
                            'dateTime': '2024-3-15T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-15T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'لا تنسَ تشرب ماء ، قبل تمشي اليوم .​',
                        'start': {
                            'dateTime': '2024-3-19T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'مّدد خطواتك وعزز صحتك ومزاجك واطلع امشي وشارك أحد أصدقائك متعة المشي  ​',
                        'start': {
                            'dateTime': '2024-3-22T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-22T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'كفو عليك وصلت لآخر أسبوع بهذا الشهر استمر على ٦٠ د ٤ايام بالأسبوع​',
                        'start': {
                            'dateTime': '2024-3-24T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-24T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'تذكر المشي إلى المسجد صحة وأجر​',
                        'start': {
                            'dateTime': '2024-3-27T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-3-27T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'وصلنا للأسبوع رقم ٣٠ من تحقيق الإنجازات والأهداف 🎖️❤️بهذه المناسبة هدفنا هذه ٣ شهور بيكون غير،​أنت اللي تحدده، بيكون عندك خيارين يا تزيد المدة أو يوم أو المحافظة على مستواك.​مستعد!؟🤩​',
                        'start': {
                            'dateTime': '2024-4-1T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'حدد خطتك وأهدافك لهذا لمدة ٣ شهور وانطلق!!🏃🏻‍♂️​',
                        'start': {
                            'dateTime': '2024-4-2T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-2T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'شاركنا هدفك لهذا الأسبوع على هاشتاق #امش٣٠​',
                        'start': {
                            'dateTime': '2024-4-5T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-5T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'لو كنت مستثقل أو مشغول عن المشي اليوم، ابدا بكره من بدري أو جرب طريقة تقسيم المشي على مدار اليوم​',
                        'start': {
                            'dateTime': '2024-4-8T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-8T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },


                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'صباحك صحة،كمل احتفالات العيد مع  أحبابك وشاركهم متعة المشي في أقرب ممشى لكم​',
                        'start': {
                            'dateTime': '2024-4-12T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-12T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'خذ لك بريك ١٠ دقائق من تمارين التمدد​',
                        'start': {
                            'dateTime': '2024-4-16T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-16T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'صباحك نشاط وصحة ​1. اختر الحذاء الداعم 👟 ​2. ‏وحدد وجهتك🎯​3. ‏وانطلق 📢🏃🏻​',
                        'start': {
                            'dateTime': '2024-4-19T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'وصلت لآخر أسبوع بهذا الشه     لا تنسَ  تتابع تقدمك واستعد للتحديات​',
                        'start': {
                            'dateTime': '2024-4-21T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-21T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'صباحك صحة وإنجاز 🤩❤️​     كم خطوة مشيت اليوم؟ شاركنا  على #امش30​',
                        'start': {
                            'dateTime': '2024-4-28T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-4-28T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'شهر جديد وخطوات جديدة 🤩​    هدفك هذا الشهر تحديد يوم في الأسبوع تمارس فيه الرياضة مع أطفالك أو إخوانك، مثل المشي -القفز على الحبل- الدراجات- كرة قدم- لعبة البادل​',
                        'start': {
                            'dateTime': '2024-5-1T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'تابع تقدمك واستعد للتحديات، كن مرن، لا تخف من تغيير خطتك أو اهدافك عند مواجهة عقبات أو صعوبات ​',
                        'start': {
                            'dateTime': '2024-5-7T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-7T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'جمعة مباركة🤍 كم خطوة مشيت اليوم؟ شاركنا  على #امش30​',
                        'start': {
                            'dateTime': '2024-5-10T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-10T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': "‏ لصحة الجسد، وصحة العلاقات: شارك عائلتك اليوم متعة المشي في أقرب حديقة  أو ممشى 👨‍👩‍👧‍👦​",
                        'start': {
                            'dateTime': '2023-5-17T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2023-5-17T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'شاركنا هدفك لهذا الأسبوع على هاشتاق #امش٣٠​',
                        'start': {
                            'dateTime': '2024-5-19T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-19T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'جرب نشاط جديد مع والديك أو أطفالك وشاركنا على هاشتاق #امش٣٠​',
                        'start': {
                            'dateTime': '2024-5-25T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-25T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'لا تنسَ تشرب ماء ، قبل تمشي اليوم .​',
                        'start': {
                            'dateTime': '2024-5-30T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-5-30T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'وصلنا لأخر شهر من التذكيرات بنشتاق لك😢❤️​ وما يحتاج نوصيك اكتب خطتك وأهدافك للسنة القادمة ولا تنسَ اللي حولك وكون قدوة لهم​',
                        'start': {
                            'dateTime': '2024-6-1T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-1T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'صباحك صحة،​  كمل احتفالات العيد مع  أحبابك وشاركهم متعة المشي في أقرب ممشى لكم​',
                        'start': {
                            'dateTime': '2024-6-17T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-17T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'لا تنسَ تمارين الاستطالة والإحماء​',
                        'start': {
                            'dateTime': '2024-6-24T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-24T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'جرب رياضة اخرى اليوم غير المشي ​ اسبح - ارفع اثقال- جرب الدراجة- يوغا​',
                        'start': {
                            'dateTime': '2024-6-28T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-28T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },
                    {
                        'summary': 'محترف',
                        'location': 'Online',
                        'description': 'وصلنا لنهاية مشوارنا معاك لكن مشوارك مع المشي ما إنتهى. الآن دورك تكمل وتكون قدوة للي حولك ما يحتاج نوصيك شاركهم متعة المشي واستمر ولا توقف 🏃🏻‍♂️💪🏼​',
                        'start': {
                            'dateTime': '2024-6-30T09:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },
                        'end': {
                            'dateTime': '2024-6-30T11:00:00',
                            'timeZone': 'Asia/Riyadh'
                        },

                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    },

                ];
            }

            events.forEach(function (event) {
                gapi.client.calendar.events.insert({
                    'calendarId': 'primary',
                    'resource': event
                }).then(function (response) {
                    console.log('Event created: ' + response.result.htmlLink);
                }).catch((err) => {
                    if (err.status === 401) {
                        handleAuthClick();
                    }
                });
            });
            event.preventDefault();
            return false;

        });
    }
}

