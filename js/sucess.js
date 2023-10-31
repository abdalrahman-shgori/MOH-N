
        window.onload = () => {
            function isIOS() {
                return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            }
            if (isIOS()) {
                document.getElementById('button').addEventListener('click', function() {
            const events = [
                        {
                            title: 'Apple Event 1',
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
            else{
               
           
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
                                'dateTime': '2023-11-1T09:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'end': {
                                'dateTime': '2023-11-1T10:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'recurrence': [
                                'RRULE:FREQ=WEEKLY;UNTIL=20231201T000000Z'
                            ],
                            'attendees': [
                                { 'email': 'example1@example.com' },
                                { 'email': 'example2@example.com' }
                            ],
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
                                'dateTime': '2023-11-5T09:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'end': {
                                'dateTime': '2023-11-5T10:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'recurrence': [
                                'RRULE:FREQ=WEEKLY;UNTIL=20231201T000000Z'
                            ],
                            'attendees': [
                                { 'email': 'example1@example.com' },
                                { 'email': 'example2@example.com' }
                            ],
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
                                'dateTime': '2023-11-7T09:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'end': {
                                'dateTime': '2023-11-7T10:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'recurrence': [
                                'RRULE:FREQ=WEEKLY;UNTIL=20231201T000000Z'
                            ],
                            'attendees': [
                                { 'email': 'example1@example.com' },
                                { 'email': 'example2@example.com' }
                            ],
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
                                'dateTime': '2023-11-10T09:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'end': {
                                'dateTime': '2023-11-10T10:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'recurrence': [
                                'RRULE:FREQ=WEEKLY;UNTIL=20231201T000000Z'
                            ],
                            'attendees': [
                                { 'email': 'example1@example.com' },
                                { 'email': 'example2@example.com' }
                            ],
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
                                'dateTime': '2023-11-12T09:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'end': {
                                'dateTime': '2023-11-12T10:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'recurrence': [
                                'RRULE:FREQ=WEEKLY;UNTIL=20231201T000000Z'
                            ],
                            'attendees': [
                                { 'email': 'example1@example.com' },
                                { 'email': 'example2@example.com' }
                            ],
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
                                'dateTime': '2023-11-14T09:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'end': {
                                'dateTime': '2023-11-14T10:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'recurrence': [
                                'RRULE:FREQ=WEEKLY;UNTIL=20231201T000000Z'
                            ],
                            'attendees': [
                                { 'email': 'example1@example.com' },
                                { 'email': 'example2@example.com' }
                            ],
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
                                'dateTime': '2023-11-17T09:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'end': {
                                'dateTime': '2023-11-17T10:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'recurrence': [
                                'RRULE:FREQ=WEEKLY;UNTIL=20231201T000000Z'
                            ],
                            'attendees': [
                                { 'email': 'example1@example.com' },
                                { 'email': 'example2@example.com' }
                            ],
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
                                'dateTime': '2023-11-19T09:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'end': {
                                'dateTime': '2023-11-19T10:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'recurrence': [
                                'RRULE:FREQ=WEEKLY;UNTIL=20231201T000000Z'
                            ],
                            'attendees': [
                                { 'email': 'example1@example.com' },
                                { 'email': 'example2@example.com' }
                            ],
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
                                'dateTime': '2023-11-21T09:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'end': {
                                'dateTime': '2023-11-21T10:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'recurrence': [
                                'RRULE:FREQ=WEEKLY;UNTIL=20231201T000000Z'
                            ],
                            'attendees': [
                                { 'email': 'example1@example.com' },
                                { 'email': 'example2@example.com' }
                            ],
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
                                'dateTime': '2023-11-26T09:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'end': {
                                'dateTime': '2023-11-26T10:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'recurrence': [
                                'RRULE:FREQ=WEEKLY;UNTIL=20231201T000000Z'
                            ],
                            'attendees': [
                                { 'email': 'example1@example.com' },
                                { 'email': 'example2@example.com' }
                            ],
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
                                'dateTime': '2023-11-24T09:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'end': {
                                'dateTime': '2023-11-24T10:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'recurrence': [
                                'RRULE:FREQ=WEEKLY;UNTIL=20231201T000000Z'
                            ],
                            'attendees': [
                                { 'email': 'example1@example.com' },
                                { 'email': 'example2@example.com' }
                            ],
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
                                'dateTime': '2023-11-29T09:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'end': {
                                'dateTime': '2023-11-29T10:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'recurrence': [
                                'RRULE:FREQ=WEEKLY;UNTIL=20231201T000000Z'
                            ],
                            'attendees': [
                                { 'email': 'example1@example.com' },
                                { 'email': 'example2@example.com' }
                            ],
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
                            'description': "شهر جديد وإنجازات جديدة كيف كان الشهر اللي فات سهل صح؟ هذا الشهر بيكون اسهل ان شاء الله",
                            'start': {
                                'dateTime': '2023-11-3T09:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'end': {
                                'dateTime': '2023-11-3T10:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'recurrence': [
                                'RRULE:FREQ=WEEKLY;UNTIL=20231201T000000Z'
                            ],
                            'attendees': [
                                { 'email': 'example1@example.com' },
                                { 'email': 'example2@example.com' }
                            ],
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
                            'description': "شهر جديد وإنجازات جديدة كيف كان الشهر اللي فات سهل صح؟ هذا الشهر بيكون اسهل ان شاء الله",
                            'start': {
                                'dateTime': '2023-12-2T02:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'end': {
                                'dateTime': '2023-12-2T3:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'recurrence': [
                                'RRULE:FREQ=WEEKLY;UNTIL=20231201T000000Z'
                            ],
                            'attendees': [
                                { 'email': 'example1@example.com' },
                                { 'email': 'example2@example.com' }
                            ],
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
                            'description': "شهر جديد وإنجازات جديدة كيف كان الشهر اللي فات سهل صح؟ هذا الشهر بيكون اسهل ان شاء الله",
                            'start': {
                                'dateTime': '2023-12-2T09:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'end': {
                                'dateTime': '2023-12-2T10:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'recurrence': [
                                'RRULE:FREQ=WEEKLY;UNTIL=20231201T000000Z'
                            ],
                            'attendees': [
                                { 'email': 'example1@example.com' },
                                { 'email': 'example2@example.com' }
                            ],
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
                            'description': "شهر جديد وإنجازات جديدة كيف كان الشهر اللي فات سهل صح؟ هذا الشهر بيكون اسهل ان شاء الله",
                            'start': {
                                'dateTime': '2023-12-2T09:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'end': {
                                'dateTime': '2023-12-2T10:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                            },
                            'recurrence': [
                                'RRULE:FREQ=WEEKLY;UNTIL=20231201T000000Z'
                            ],
                            'attendees': [
                                { 'email': 'example1@example.com' },
                                { 'email': 'example2@example.com' }
                            ],
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
        } }

