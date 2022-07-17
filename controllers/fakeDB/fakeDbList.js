module.exports.listData = {
    "results": [
        {
            "id": "SIA",
            "label": "Singapore Airlines (SIA / SQ)",
            "detail": {
                "iata": "SQ",
                "logo": "s3:SQ_SIA.png"
            },
            "type": "operator",
            "match": "iata",
            "name": "Singapore Airlines"
        },
        {
            "id": "2c81f374",
            "label": "SQ38 / SIA38 / A359 (9V-SMZ)",
            "detail": {
                "lat": 46.9,
                "lon": 177.6,
                "schd_from": "SIN",
                "schd_to": "LAX",
                "ac_type": "A359",
                "route": "Singapore (SIN) ⟶ Los Angeles (LAX)",
                "logo": "s3:SQ_SIA.png",
                "reg": "9V-SMZ",
                "callsign": "SIA38",
                "flight": "SQ38",
                "operator": "SIA"
            },
            "type": "live",
            "match": "begins"
        },
        {
            "id": "SQ38",
            "label": "SQ38 / SIA38",
            "detail": {
                "logo": "s3:SQ_SIA.png",
                "callsign": "SIA38",
                "flight": "SQ38",
                "operator": "SIA"
            },
            "type": "schedule",
            "match": "begins"
        },
        {
            "id": "SQ387",
            "label": "SQ387",
            "detail": {
                "logo": "s3:SQ_SIA.png",
                "flight": "SQ387",
                "operator": "SIA"
            },
            "type": "schedule",
            "match": "begins"
        },
        {
            "id": "SQ388",
            "label": "SQ388",
            "detail": {
                "logo": "s3:SQ_SIA.png",
                "flight": "SQ388",
                "operator": "SIA"
            },
            "type": "schedule",
            "match": "begins"
        }
    ],
    "stats": {
        "total": {
            "all": 5,
            "airport": 0,
            "operator": 1,
            "live": 1,
            "schedule": 3,
            "aircraft": 0
        },
        "count": {
            "airport": 0,
            "operator": 1,
            "live": 1,
            "schedule": 3,
            "aircraft": 0
        }
    }
}

module.exports.detailData = {
    "identification": {
        "id": "2c7ee2e2",
        "row": 5235873545,
        "number": {
            "default": "SQ38",
            "alternative": null
        },
        "callsign": "SIA38"
    },
    "status": {
        "live": false,
        "text": "Landed 22:01",
        "icon": "yellow",
        "estimated": null,
        "ambiguous": false,
        "generic": {
            "status": {
                "text": "landed",
                "color": "yellow",
                "type": "arrival"
            },
            "eventTime": {
                "utc": 1656910876,
                "local": 1656885676
            }
        }
    },
    "level": "limited",
    "promote": false,
    "aircraft": {
        "model": {
            "code": "A359",
            "text": "Airbus A350-941"
        },
        "countryId": 199,
        "registration": "9V-SMW",
        "hex": "76cdb7",
        "age": null,
        "msn": null,
        "images": {
            "thumbnails": [
                {
                    "src": "https://cdn.jetphotos.com/200/6/38555_1648312534_tb.jpg?v=0",
                    "link": "https://www.jetphotos.com/photo/10533382",
                    "copyright": "Amarase Pamarapa",
                    "source": "Jetphotos"
                },
                {
                    "src": "https://cdn.jetphotos.com/200/6/89282_1645325050_tb.jpg?v=0",
                    "link": "https://www.jetphotos.com/photo/10494858",
                    "copyright": "Sua Ding Zhe",
                    "source": "Jetphotos"
                },
                {
                    "src": "https://cdn.jetphotos.com/200/5/46655_1647002067_tb.jpg?v=0",
                    "link": "https://www.jetphotos.com/photo/10517326",
                    "copyright": "Adrian Daileg",
                    "source": "Jetphotos"
                },
                {
                    "src": "https://cdn.jetphotos.com/200/6/17109_1644679471_tb.jpg?v=0",
                    "link": "https://www.jetphotos.com/photo/10485980",
                    "copyright": "Ramon Jordi",
                    "source": "Jetphotos"
                },
                {
                    "src": "https://cdn.jetphotos.com/200/6/22312_1638894304_tb.jpg?v=0",
                    "link": "https://www.jetphotos.com/photo/10408218",
                    "copyright": "Chung Kwok",
                    "source": "Jetphotos"
                }
            ],
            "medium": [
                {
                    "src": "https://cdn.jetphotos.com/400/6/38555_1648312534.jpg?v=0",
                    "link": "https://www.jetphotos.com/photo/10533382",
                    "copyright": "Amarase Pamarapa",
                    "source": "Jetphotos"
                },
                {
                    "src": "https://cdn.jetphotos.com/400/6/89282_1645325050.jpg?v=0",
                    "link": "https://www.jetphotos.com/photo/10494858",
                    "copyright": "Sua Ding Zhe",
                    "source": "Jetphotos"
                },
                {
                    "src": "https://cdn.jetphotos.com/400/5/46655_1647002067.jpg?v=0",
                    "link": "https://www.jetphotos.com/photo/10517326",
                    "copyright": "Adrian Daileg",
                    "source": "Jetphotos"
                },
                {
                    "src": "https://cdn.jetphotos.com/400/6/17109_1644679471.jpg?v=0",
                    "link": "https://www.jetphotos.com/photo/10485980",
                    "copyright": "Ramon Jordi",
                    "source": "Jetphotos"
                },
                {
                    "src": "https://cdn.jetphotos.com/400/6/22312_1638894304.jpg?v=0",
                    "link": "https://www.jetphotos.com/photo/10408218",
                    "copyright": "Chung Kwok",
                    "source": "Jetphotos"
                }
            ],
            "large": [
                {
                    "src": "https://cdn.jetphotos.com/640cb/6/38555_1648312534.jpg?v=0",
                    "link": "https://www.jetphotos.com/photo/10533382",
                    "copyright": "Amarase Pamarapa",
                    "source": "Jetphotos"
                },
                {
                    "src": "https://cdn.jetphotos.com/640cb/6/89282_1645325050.jpg?v=0",
                    "link": "https://www.jetphotos.com/photo/10494858",
                    "copyright": "Sua Ding Zhe",
                    "source": "Jetphotos"
                },
                {
                    "src": "https://cdn.jetphotos.com/640cb/5/46655_1647002067.jpg?v=0",
                    "link": "https://www.jetphotos.com/photo/10517326",
                    "copyright": "Adrian Daileg",
                    "source": "Jetphotos"
                },
                {
                    "src": "https://cdn.jetphotos.com/640cb/6/17109_1644679471.jpg?v=0",
                    "link": "https://www.jetphotos.com/photo/10485980",
                    "copyright": "Ramon Jordi",
                    "source": "Jetphotos"
                },
                {
                    "src": "https://cdn.jetphotos.com/640cb/6/22312_1638894304.jpg?v=0",
                    "link": "https://www.jetphotos.com/photo/10408218",
                    "copyright": "Chung Kwok",
                    "source": "Jetphotos"
                }
            ]
        }
    },
    "airline": {
        "name": "Singapore Airlines",
        "short": "Singapore Airlines",
        "code": {
            "iata": "SQ",
            "icao": "SIA"
        },
        "url": "singapore-airlines-sia"
    },
    "owner": null,
    "airspace": null,
    "airport": {
        "origin": {
            "name": "Singapore Changi Airport",
            "code": {
                "iata": "SIN",
                "icao": "WSSS"
            },
            "position": {
                "latitude": 1.350189,
                "longitude": 103.9944,
                "altitude": 22,
                "country": {
                    "id": null,
                    "name": "Singapore",
                    "code": "SGP"
                },
                "region": {
                    "city": "Singapore"
                }
            },
            "timezone": {
                "name": "Asia/Singapore",
                "offset": 28800,
                "offsetHours": "8:00",
                "abbr": "+08",
                "abbrName": "",
                "isDst": false
            },
            "visible": true,
            "website": "http://www.changiairport.com/",
            "info": {
                "terminal": "3",
                "baggage": null,
                "gate": "B8"
            }
        },
        "destination": {
            "name": "Los Angeles International Airport",
            "code": {
                "iata": "LAX",
                "icao": "KLAX"
            },
            "position": {
                "latitude": 33.94252,
                "longitude": -118.406998,
                "altitude": 125,
                "country": {
                    "id": null,
                    "name": "United States",
                    "code": "USA"
                },
                "region": {
                    "city": "Los Angeles"
                }
            },
            "timezone": {
                "name": "America/Los_Angeles",
                "offset": -25200,
                "offsetHours": "-7:00",
                "abbr": "PDT",
                "abbrName": "Pacific Daylight Time",
                "isDst": true
            },
            "visible": true,
            "website": "http://www.lawa.org/welcomeLAX.aspx",
            "info": {
                "terminal": "B",
                "baggage": null,
                "gate": null
            }
        },
        "real": null
    },
    "flightHistory": {
        "aircraft": [
            {
                "identification": {
                    "id": "2c7cc006",
                    "number": {
                        "default": "SQ31"
                    }
                },
                "airport": {
                    "origin": {
                        "name": "San Francisco International Airport",
                        "code": {
                            "iata": "SFO",
                            "icao": "KSFO"
                        },
                        "position": {
                            "latitude": 37.618969,
                            "longitude": -122.374001,
                            "altitude": 13,
                            "country": {
                                "id": null,
                                "name": "United States",
                                "code": "USA"
                            },
                            "region": {
                                "city": "San Francisco"
                            }
                        },
                        "timezone": {
                            "name": "America/Los_Angeles",
                            "offset": -25200,
                            "offsetHours": "-7:00",
                            "abbr": "PDT",
                            "abbrName": "Pacific Daylight Time",
                            "isDst": true
                        },
                        "visible": true,
                        "website": "http://www.flysfo.com/"
                    },
                    "destination": {
                        "name": "Singapore Changi Airport",
                        "code": {
                            "iata": "SIN",
                            "icao": "WSSS"
                        },
                        "position": {
                            "latitude": 1.350189,
                            "longitude": 103.9944,
                            "altitude": 22,
                            "country": {
                                "id": null,
                                "name": "Singapore",
                                "code": "SGP"
                            },
                            "region": {
                                "city": "Singapore"
                            }
                        },
                        "timezone": {
                            "name": "Asia/Singapore",
                            "offset": 28800,
                            "offsetHours": "8:00",
                            "abbr": "+08",
                            "abbrName": "",
                            "isDst": false
                        },
                        "visible": true,
                        "website": "http://www.changiairport.com/"
                    }
                },
                "time": {
                    "real": {
                        "departure": 1656788061
                    }
                }
            },
            {
                "identification": {
                    "id": "2c7a618b",
                    "number": {
                        "default": "SQ32"
                    }
                },
                "airport": {
                    "origin": {
                        "name": "Singapore Changi Airport",
                        "code": {
                            "iata": "SIN",
                            "icao": "WSSS"
                        },
                        "position": {
                            "latitude": 1.350189,
                            "longitude": 103.9944,
                            "altitude": 22,
                            "country": {
                                "id": null,
                                "name": "Singapore",
                                "code": "SGP"
                            },
                            "region": {
                                "city": "Singapore"
                            }
                        },
                        "timezone": {
                            "name": "Asia/Singapore",
                            "offset": 28800,
                            "offsetHours": "8:00",
                            "abbr": "+08",
                            "abbrName": "",
                            "isDst": false
                        },
                        "visible": true,
                        "website": "http://www.changiairport.com/"
                    },
                    "destination": {
                        "name": "San Francisco International Airport",
                        "code": {
                            "iata": "SFO",
                            "icao": "KSFO"
                        },
                        "position": {
                            "latitude": 37.618969,
                            "longitude": -122.374001,
                            "altitude": 13,
                            "country": {
                                "id": null,
                                "name": "United States",
                                "code": "USA"
                            },
                            "region": {
                                "city": "San Francisco"
                            }
                        },
                        "timezone": {
                            "name": "America/Los_Angeles",
                            "offset": -25200,
                            "offsetHours": "-7:00",
                            "abbr": "PDT",
                            "abbrName": "Pacific Daylight Time",
                            "isDst": true
                        },
                        "visible": true,
                        "website": "http://www.flysfo.com/"
                    }
                },
                "time": {
                    "real": {
                        "departure": 1656725793
                    }
                }
            },
            {
                "identification": {
                    "id": "2c7785e4",
                    "number": {
                        "default": "SQ37"
                    }
                },
                "airport": {
                    "origin": {
                        "name": "Los Angeles International Airport",
                        "code": {
                            "iata": "LAX",
                            "icao": "KLAX"
                        },
                        "position": {
                            "latitude": 33.94252,
                            "longitude": -118.406998,
                            "altitude": 125,
                            "country": {
                                "id": null,
                                "name": "United States",
                                "code": "USA"
                            },
                            "region": {
                                "city": "Los Angeles"
                            }
                        },
                        "timezone": {
                            "name": "America/Los_Angeles",
                            "offset": -25200,
                            "offsetHours": "-7:00",
                            "abbr": "PDT",
                            "abbrName": "Pacific Daylight Time",
                            "isDst": true
                        },
                        "visible": true,
                        "website": "http://www.lawa.org/welcomeLAX.aspx"
                    },
                    "destination": {
                        "name": "Singapore Changi Airport",
                        "code": {
                            "iata": "SIN",
                            "icao": "WSSS"
                        },
                        "position": {
                            "latitude": 1.350189,
                            "longitude": 103.9944,
                            "altitude": 22,
                            "country": {
                                "id": null,
                                "name": "Singapore",
                                "code": "SGP"
                            },
                            "region": {
                                "city": "Singapore"
                            }
                        },
                        "timezone": {
                            "name": "Asia/Singapore",
                            "offset": 28800,
                            "offsetHours": "8:00",
                            "abbr": "+08",
                            "abbrName": "",
                            "isDst": false
                        },
                        "visible": true,
                        "website": "http://www.changiairport.com/"
                    }
                },
                "time": {
                    "real": {
                        "departure": 1656658627
                    }
                }
            },
            {
                "identification": {
                    "id": "2c74b666",
                    "number": {
                        "default": "SQ38"
                    }
                },
                "airport": {
                    "origin": {
                        "name": "Singapore Changi Airport",
                        "code": {
                            "iata": "SIN",
                            "icao": "WSSS"
                        },
                        "position": {
                            "latitude": 1.350189,
                            "longitude": 103.9944,
                            "altitude": 22,
                            "country": {
                                "id": null,
                                "name": "Singapore",
                                "code": "SGP"
                            },
                            "region": {
                                "city": "Singapore"
                            }
                        },
                        "timezone": {
                            "name": "Asia/Singapore",
                            "offset": 28800,
                            "offsetHours": "8:00",
                            "abbr": "+08",
                            "abbrName": "",
                            "isDst": false
                        },
                        "visible": true,
                        "website": "http://www.changiairport.com/"
                    },
                    "destination": {
                        "name": "Los Angeles International Airport",
                        "code": {
                            "iata": "LAX",
                            "icao": "KLAX"
                        },
                        "position": {
                            "latitude": 33.94252,
                            "longitude": -118.406998,
                            "altitude": 125,
                            "country": {
                                "id": null,
                                "name": "United States",
                                "code": "USA"
                            },
                            "region": {
                                "city": "Los Angeles"
                            }
                        },
                        "timezone": {
                            "name": "America/Los_Angeles",
                            "offset": -25200,
                            "offsetHours": "-7:00",
                            "abbr": "PDT",
                            "abbrName": "Pacific Daylight Time",
                            "isDst": true
                        },
                        "visible": true,
                        "website": "http://www.lawa.org/welcomeLAX.aspx"
                    }
                },
                "time": {
                    "real": {
                        "departure": 1656594490
                    }
                }
            }
        ]
    },
    "ems": null,
    "availability": [
        "AGE",
        "MSN"
    ],
    "time": {
        "scheduled": {
            "departure": 1656852300,
            "arrival": 1656909600
        },
        "real": {
            "departure": 1656854366,
            "arrival": 1656910876
        },
        "estimated": {
            "departure": null,
            "arrival": null
        },
        "other": {
            "eta": 1656910876,
            "updated": 1656910877
        },
        "historical": {
            "flighttime": "53631",
            "delay": "-1676"
        }
    }
}

//rows > name, ICAO
module.exports.airlineList = {
    "version": 1657878097,
    "rows": [
        {
            "Name": "21 Air",
            "Code": "2I",
            "ICAO": "CSB"
        },
        {
            "Name": "25only Aviation",
            "Code": "4Q",
            "ICAO": "ONY"
        },
        {
            "Name": "2Excel Aviation",
            "Code": "",
            "ICAO": "BRO"
        },
        {
            "Name": "40-Mile Air",
            "Code": "Q5",
            "ICAO": "MLA"
        },
        {
            "Name": "748 Air Services",
            "Code": "FE",
            "ICAO": "IHO"
        },
        {
            "Name": "9 Air",
            "Code": "AQ",
            "ICAO": "JYH"
        },
        {
            "Name": "Abakan Air",
            "Code": "S5",
            "ICAO": "NKP"
        },
        {
            "Name": "ABS Jets",
            "Code": "",
            "ICAO": "ABP"
        },
        {
            "Name": "Abu Dhabi Aviation",
            "Code": "",
            "ICAO": "BAR"
        },
        {
            "Name": "ABX Air",
            "Code": "GB",
            "ICAO": "ABX"
        },
        {
            "Name": "Acass Ireland",
            "Code": "",
            "ICAO": "SON"
        },
        {
            "Name": "Advanced Air",
            "Code": "AN",
            "ICAO": "WSN"
        },
        {
            "Name": "Aegean Airlines",
            "Code": "A3",
            "ICAO": "AEE"
        },
        {
            "Name": "Aer Lingus",
            "Code": "EI",
            "ICAO": "EIN"
        },
        {
            "Name": "Aer Lingus UK",
            "Code": "EG",
            "ICAO": "EUK"
        },
        {
            "Name": "AerCaribe",
            "Code": "JK",
            "ICAO": "ACL"
        },
        {
            "Name": "Aero",
            "Code": "TD",
            "ICAO": "BLK"
        },
        {
            "Name": "Aero",
            "Code": "N2",
            "ICAO": "NIG"
        },
        {
            "Name": "Aero Asahi Corporation",
            "Code": "",
            "ICAO": "AKF"
        },
        {
            "Name": "Aero Charter",
            "Code": "",
            "ICAO": "GLT"
        },
        {
            "Name": "Aero Charter and Transport",
            "Code": "",
            "ICAO": "CTA"
        },
        {
            "Name": "Aero FlightOps UK",
            "Code": "FO",
            "ICAO": "UKA"
        },
        {
            "Name": "Aero Guernsey",
            "Code": "",
            "ICAO": "AEO"
        },
        {
            "Name": "Aero K",
            "Code": "RF",
            "ICAO": "EOK"
        },
        {
            "Name": "Aero Mongolia",
            "Code": "M0",
            "ICAO": "MNG"
        },
        {
            "Name": "Aero Nomad Airlines",
            "Code": "",
            "ICAO": "ANK"
        },
        {
            "Name": "Aero Sotravia",
            "Code": "",
            "ICAO": "ASR"
        },
        {
            "Name": "Aero-Beta Flight Training",
            "Code": "",
            "ICAO": "ABA"
        },
        {
            "Name": "Aero-Dienst",
            "Code": "",
            "ICAO": "ADN"
        },
        {
            "Name": "Aero-Service",
            "Code": "",
            "ICAO": "RSR"
        },
        {
            "Name": "Aeroflot",
            "Code": "SU",
            "ICAO": "AFL"
        },
        {
            "Name": "Aeroitalia",
            "Code": "XZ",
            "ICAO": "AEZ"
        },
        {
            "Name": "Aerolineas Argentinas",
            "Code": "AR",
            "ICAO": "ARG"
        },
        {
            "Name": "Aerolineas Ejecutivas",
            "Code": "",
            "ICAO": "LET"
        },
        {
            "Name": "Aerolineas Sosa",
            "Code": "P4",
            "ICAO": "NSO"
        },
        {
            "Name": "Aerolink Uganda",
            "Code": "A8",
            "ICAO": "XAU"
        },
        {
            "Name": "AeroLogic",
            "Code": "3S",
            "ICAO": "BOX"
        },
        {
            "Name": "Aeromar",
            "Code": "VW",
            "ICAO": "TAO"
        },
        {
            "Name": "Aeromexico",
            "Code": "AM",
            "ICAO": "AMX"
        },
        {
            "Name": "Aeromexico Connect",
            "Code": "5D",
            "ICAO": "SLI"
        },
        {
            "Name": "Aeronaves TSM",
            "Code": "",
            "ICAO": "VTM"
        },
        {
            "Name": "Aeropartner",
            "Code": "",
            "ICAO": "DFC"
        },
        {
            "Name": "Aeroregional",
            "Code": "",
            "ICAO": "RER"
        },
        {
            "Name": "Aeroservicios de la Costa",
            "Code": "",
            "ICAO": "TAA"
        },
        {
            "Name": "Aerostan",
            "Code": "",
            "ICAO": "BSC"
        },
        {
            "Name": "Aerosucre",
            "Code": "",
            "ICAO": "KRE"
        },
        {
            "Name": "Aerosul Linhas Aereas",
            "Code": "",
            "ICAO": "ASO"
        },
        {
            "Name": "Aerotec",
            "Code": "",
            "ICAO": "AEP"
        },
        {
            "Name": "Aerotours",
            "Code": "",
            "ICAO": "ATU"
        },
        {
            "Name": "Aerotranscargo",
            "Code": "F5",
            "ICAO": "ATG"
        },
        {
            "Name": "AeroUnion",
            "Code": "6R",
            "ICAO": "TNO"
        },
        {
            "Name": "Aerovias DAP",
            "Code": "V5",
            "ICAO": "DAP"
        },
        {
            "Name": "Aerovis Airlines",
            "Code": "",
            "ICAO": "VIZ"
        },
        {
            "Name": "Aerro Direkt",
            "Code": "4D",
            "ICAO": "DIR"
        },
        {
            "Name": "AF-Aviation",
            "Code": "",
            "ICAO": "AFF"
        },
        {
            "Name": "Afric Aviation",
            "Code": "L8",
            "ICAO": "EKG"
        },
        {
            "Name": "Africa Airlines",
            "Code": "",
            "ICAO": "AAT"
        },
        {
            "Name": "Africa World Airlines",
            "Code": "AW",
            "ICAO": "AFW"
        },
        {
            "Name": "African Express Airways",
            "Code": "XU",
            "ICAO": "AXK"
        },
        {
            "Name": "Afrijet",
            "Code": "J7",
            "ICAO": "ABS"
        },
        {
            "Name": "Afriqiyah Airways",
            "Code": "8U",
            "ICAO": "AAW"
        },
        {
            "Name": "Air 1st Aviation",
            "Code": "",
            "ICAO": "RUF"
        },
        {
            "Name": "Air Albania",
            "Code": "ZB",
            "ICAO": "ABN"
        },
        {
            "Name": "Air Algerie",
            "Code": "AH",
            "ICAO": "DAH"
        },
        {
            "Name": "Air Alliance",
            "Code": "",
            "ICAO": "AYY"
        },
        {
            "Name": "Air Alsie",
            "Code": "6I",
            "ICAO": "MMD"
        },
        {
            "Name": "Air Antilles",
            "Code": "3S",
            "ICAO": "GUY"
        },
        {
            "Name": "Air Arabia",
            "Code": "G9",
            "ICAO": "ABY"
        },
        {
            "Name": "Air Arabia Abu Dhabi",
            "Code": "3L",
            "ICAO": "ADY"
        },
        {
            "Name": "Air Arabia Egypt",
            "Code": "E5",
            "ICAO": "RBG"
        },
        {
            "Name": "Air Arabia Maroc",
            "Code": "3O",
            "ICAO": "MAC"
        },
        {
            "Name": "Air Astana",
            "Code": "KC",
            "ICAO": "KZR"
        },
        {
            "Name": "Air Atlanta Europe",
            "Code": "CT",
            "ICAO": "AAE"
        },
        {
            "Name": "Air Atlanta Icelandic",
            "Code": "CC",
            "ICAO": "ABD"
        },
        {
            "Name": "Air Austral",
            "Code": "UU",
            "ICAO": "REU"
        },
        {
            "Name": "Air Bagan",
            "Code": "W9",
            "ICAO": "JAB"
        },
        {
            "Name": "Air Baltic",
            "Code": "BT",
            "ICAO": "BTI"
        },
        {
            "Name": "Air Belgium",
            "Code": "KF",
            "ICAO": "ABB"
        },
        {
            "Name": "Air Bohemia",
            "Code": "",
            "ICAO": "BOH"
        },
        {
            "Name": "Air Borealis",
            "Code": "",
            "ICAO": "LBR"
        },
        {
            "Name": "Air Botswana",
            "Code": "BP",
            "ICAO": "BOT"
        },
        {
            "Name": "Air Bucharest",
            "Code": "",
            "ICAO": "BUR"
        },
        {
            "Name": "Air Burkina",
            "Code": "2J",
            "ICAO": "VBW"
        },
        {
            "Name": "Air Busan",
            "Code": "BX",
            "ICAO": "ABL"
        },
        {
            "Name": "Air Cairo",
            "Code": "SM",
            "ICAO": "MSC"
        },
        {
            "Name": "Air Caledonie",
            "Code": "TY",
            "ICAO": "TPC"
        },
        {
            "Name": "Air Canada",
            "Code": "AC",
            "ICAO": "ACA"
        },
        {
            "Name": "Air Canada Rouge",
            "Code": "RV",
            "ICAO": "ROU"
        },
        {
            "Name": "Air Caraibes",
            "Code": "TX",
            "ICAO": "FWI"
        },
        {
            "Name": "Air Care Alliance",
            "Code": "",
            "ICAO": "CMF"
        },
        {
            "Name": "Air Cargo Carriers",
            "Code": "2Q",
            "ICAO": "SNC"
        },
        {
            "Name": "Air Cargo Global",
            "Code": "CW",
            "ICAO": "CCC"
        },
        {
            "Name": "Air Century",
            "Code": "Y2",
            "ICAO": "CEY"
        },
        {
            "Name": "Air Changan",
            "Code": "9H",
            "ICAO": "CGN"
        },
        {
            "Name": "Air Charity Network",
            "Code": "",
            "ICAO": "NGF"
        },
        {
            "Name": "Air Charter Scotland",
            "Code": "",
            "ICAO": "EDC"
        },
        {
            "Name": "Air Charter Scotland Europe",
            "Code": "",
            "ICAO": "SCO"
        },
        {
            "Name": "Air Chathams",
            "Code": "3C",
            "ICAO": "CVA"
        },
        {
            "Name": "Air China",
            "Code": "CA",
            "ICAO": "CCA"
        },
        {
            "Name": "Air China Cargo",
            "Code": "",
            "ICAO": "CAO"
        },
        {
            "Name": "Air China Inner Mongolia",
            "Code": "",
            "ICAO": "CNM"
        },
        {
            "Name": "Air Choice One",
            "Code": "3E",
            "ICAO": "ACO"
        },
        {
            "Name": "Air CM Global",
            "Code": "",
            "ICAO": "RJR"
        },
        {
            "Name": "Air Corporate",
            "Code": "",
            "ICAO": "CPV"
        },
        {
            "Name": "Air Corsica",
            "Code": "XK",
            "ICAO": "CCM"
        },
        {
            "Name": "Air Costa Rica",
            "Code": "RI",
            "ICAO": "RII"
        },
        {
            "Name": "Air Cote d'Ivoire",
            "Code": "HF",
            "ICAO": "VRE"
        },
        {
            "Name": "Air Creebec",
            "Code": "YN",
            "ICAO": "CRQ"
        },
        {
            "Name": "Air Deccan",
            "Code": "",
            "ICAO": "DKN"
        },
        {
            "Name": "Air Do",
            "Code": "HD",
            "ICAO": "ADO"
        },
        {
            "Name": "Air Dolomiti",
            "Code": "EN",
            "ICAO": "DLA"
        },
        {
            "Name": "Air Europa",
            "Code": "UX",
            "ICAO": "AEA"
        },
        {
            "Name": "Air Europa Express",
            "Code": "X5",
            "ICAO": "OVA"
        },
        {
            "Name": "Air Excel",
            "Code": "",
            "ICAO": "XLL"
        },
        {
            "Name": "Air Falcon",
            "Code": "FS",
            "ICAO": "FPK"
        },
        {
            "Name": "Air Flamenco",
            "Code": "F4",
            "ICAO": "WAF"
        },
        {
            "Name": "Air France",
            "Code": "AF",
            "ICAO": "AFR"
        },
        {
            "Name": "Air France Hop",
            "Code": "A5",
            "ICAO": "HOP"
        },
        {
            "Name": "Air Georgia",
            "Code": "DC",
            "ICAO": "AGF"
        },
        {
            "Name": "Air Ghana",
            "Code": "",
            "ICAO": "GHN"
        },
        {
            "Name": "Air Greenland",
            "Code": "GL",
            "ICAO": "GRL"
        },
        {
            "Name": "Air Guilin",
            "Code": "GT",
            "ICAO": "CGH"
        },
        {
            "Name": "Air Hamburg",
            "Code": "",
            "ICAO": "AHO"
        },
        {
            "Name": "Air Hong Kong",
            "Code": "LD",
            "ICAO": "AHK"
        },
        {
            "Name": "Air Horizont",
            "Code": "HT",
            "ICAO": "HAT"
        },
        {
            "Name": "Air Incheon",
            "Code": "KJ",
            "ICAO": "AIH"
        },
        {
            "Name": "Air India",
            "Code": "AI",
            "ICAO": "AIC"
        },
        {
            "Name": "Air India Express",
            "Code": "IX",
            "ICAO": "AXB"
        },
        {
            "Name": "Air Inuit",
            "Code": "3H",
            "ICAO": "AIE"
        },
        {
            "Name": "Air Japan",
            "Code": "NQ",
            "ICAO": "AJX"
        },
        {
            "Name": "Air KBZ",
            "Code": "K7",
            "ICAO": "KBZ"
        },
        {
            "Name": "Air Kiribati",
            "Code": "IK",
            "ICAO": "AKL"
        },
        {
            "Name": "Air Koryo",
            "Code": "JS",
            "ICAO": "KOR"
        },
        {
            "Name": "Air Leisure",
            "Code": "AL",
            "ICAO": "ALD"
        },
        {
            "Name": "Air Liaison",
            "Code": "DU",
            "ICAO": "LSJ"
        },
        {
            "Name": "Air Libya",
            "Code": "7I",
            "ICAO": "TLR"
        },
        {
            "Name": "Air Loyaute",
            "Code": "",
            "ICAO": "RLY"
        },
        {
            "Name": "Air Macau",
            "Code": "NX",
            "ICAO": "AMU"
        },
        {
            "Name": "Air Madagascar",
            "Code": "MD",
            "ICAO": "MDG"
        },
        {
            "Name": "Air Malta",
            "Code": "KM",
            "ICAO": "AMC"
        },
        {
            "Name": "Air Manas",
            "Code": "ZM",
            "ICAO": "MBB"
        },
        {
            "Name": "Air Mauritius",
            "Code": "MK",
            "ICAO": "MAU"
        },
        {
            "Name": "Air Mediterranean",
            "Code": "MV",
            "ICAO": "MAR"
        },
        {
            "Name": "Air Moldova",
            "Code": "9U",
            "ICAO": "MLD"
        },
        {
            "Name": "Air Montenegro",
            "Code": "",
            "ICAO": "MNE"
        },
        {
            "Name": "Air New Zealand",
            "Code": "NZ",
            "ICAO": "ANZ"
        },
        {
            "Name": "Air Niugini",
            "Code": "PX",
            "ICAO": "ANG"
        },
        {
            "Name": "Air North",
            "Code": "4N",
            "ICAO": "ANT"
        },
        {
            "Name": "Air Nostrum",
            "Code": "YW",
            "ICAO": "ANE"
        },
        {
            "Name": "Air Nunavut",
            "Code": "",
            "ICAO": "BFF"
        },
        {
            "Name": "Air Panama",
            "Code": "7P",
            "ICAO": "PST"
        },
        {
            "Name": "Air Peace",
            "Code": "P4",
            "ICAO": "APK"
        },
        {
            "Name": "Air Premia",
            "Code": "YP",
            "ICAO": "APZ"
        },
        {
            "Name": "Air Rarotonga",
            "Code": "GZ",
            "ICAO": "RAR"
        },
        {
            "Name": "Air Saint-Pierre",
            "Code": "PJ",
            "ICAO": "SPM"
        },
        {
            "Name": "Air Senegal",
            "Code": "HC",
            "ICAO": "SZN"
        },
        {
            "Name": "Air Seoul",
            "Code": "RS",
            "ICAO": "ASV"
        },
        {
            "Name": "Air Seychelles",
            "Code": "HM",
            "ICAO": "SEY"
        },
        {
            "Name": "Air Sinai",
            "Code": "4D",
            "ICAO": "ASD"
        },
        {
            "Name": "Air Spray",
            "Code": "",
            "ICAO": "ASB"
        },
        {
            "Name": "Air Sunshine",
            "Code": "",
            "ICAO": "RSI"
        },
        {
            "Name": "Air Tahiti",
            "Code": "VT",
            "ICAO": "VTA"
        },
        {
            "Name": "Air Tahiti Nui",
            "Code": "TN",
            "ICAO": "THT"
        },
        {
            "Name": "Air Tanzania",
            "Code": "TC",
            "ICAO": "ATC"
        },
        {
            "Name": "Air Taxi & Charter International",
            "Code": "",
            "ICAO": "IBJ"
        },
        {
            "Name": "Air Thanlwin",
            "Code": "ST",
            "ICAO": "AYG"
        },
        {
            "Name": "Air Tindi",
            "Code": "8T",
            "ICAO": "TIN"
        },
        {
            "Name": "Air Transat",
            "Code": "TS",
            "ICAO": "TSC"
        },
        {
            "Name": "Air Transport Europe",
            "Code": "",
            "ICAO": "EAT"
        },
        {
            "Name": "Air Transport International",
            "Code": "8C",
            "ICAO": "ATN"
        },
        {
            "Name": "Air Travel",
            "Code": "A6",
            "ICAO": "OTC"
        },
        {
            "Name": "Air Urga",
            "Code": "3N",
            "ICAO": "URG"
        },
        {
            "Name": "Air Vanuatu",
            "Code": "NF",
            "ICAO": "AVN"
        },
        {
            "Name": "Air Volta",
            "Code": "",
            "ICAO": "VLB"
        },
        {
            "Name": "Air Wisconsin",
            "Code": "ZW",
            "ICAO": "AWI"
        },
        {
            "Name": "Air X Charter",
            "Code": "AX",
            "ICAO": "AXY"
        },
        {
            "Name": "Air Zimbabwe",
            "Code": "UM",
            "ICAO": "AZW"
        },
        {
            "Name": "Air-Glaciers",
            "Code": "",
            "ICAO": "AGV"
        },
        {
            "Name": "Air-Taxi Europe",
            "Code": "",
            "ICAO": "TWG"
        },
        {
            "Name": "AirACT",
            "Code": "9T",
            "ICAO": "RUN"
        },
        {
            "Name": "AirAsia",
            "Code": "AK",
            "ICAO": "AXM"
        },
        {
            "Name": "AirAsia India",
            "Code": "I5",
            "ICAO": "IAD"
        },
        {
            "Name": "AirAsia X",
            "Code": "D7",
            "ICAO": "XAX"
        },
        {
            "Name": "Airbahn",
            "Code": "UN",
            "ICAO": "ARB"
        },
        {
            "Name": "AirBlue",
            "Code": "PA",
            "ICAO": "ABQ"
        },
        {
            "Name": "AirBridgeCargo Airlines",
            "Code": "RU",
            "ICAO": "ABW"
        },
        {
            "Name": "Airbus",
            "Code": "",
            "ICAO": "AIB"
        },
        {
            "Name": "Airbus Transport International",
            "Code": "4Y",
            "ICAO": "BGA"
        },
        {
            "Name": "Aircalin",
            "Code": "SB",
            "ICAO": "ACI"
        },
        {
            "Name": "Aircompany Armenia",
            "Code": "RM",
            "ICAO": "NGT"
        },
        {
            "Name": "Aircraft Management Group",
            "Code": "",
            "ICAO": "RVJ"
        },
        {
            "Name": "Aireon Canada",
            "Code": "",
            "ICAO": "AEN"
        },
        {
            "Name": "Airest",
            "Code": "",
            "ICAO": "AEG"
        },
        {
            "Name": "AirExplore",
            "Code": "ED",
            "ICAO": "AXE"
        },
        {
            "Name": "Airfast Indonesia",
            "Code": "",
            "ICAO": "AFE"
        },
        {
            "Name": "AirGO Private Airline",
            "Code": "",
            "ICAO": "XGO"
        },
        {
            "Name": "Airhub Airlines",
            "Code": "",
            "ICAO": "GJM"
        },
        {
            "Name": "Airkenya Express",
            "Code": "P2",
            "ICAO": "XAK"
        },
        {
            "Name": "Airlec Air Espace",
            "Code": "",
            "ICAO": "ARL"
        },
        {
            "Name": "Airlift",
            "Code": "",
            "ICAO": "ALI"
        },
        {
            "Name": "Airlift International",
            "Code": "",
            "ICAO": "AIR"
        },
        {
            "Name": "Airlink",
            "Code": "",
            "ICAO": "JAR"
        },
        {
            "Name": "Airlink",
            "Code": "4Z",
            "ICAO": "LNK"
        },
        {
            "Name": "AirNet",
            "Code": "",
            "ICAO": "USC"
        },
        {
            "Name": "Airnorth",
            "Code": "TL",
            "ICAO": "ANO"
        },
        {
            "Name": "Airpac Airlines",
            "Code": "",
            "ICAO": "APC"
        },
        {
            "Name": "AirPink",
            "Code": "",
            "ICAO": "PNK"
        },
        {
            "Name": "AirSERBIA",
            "Code": "JU",
            "ICAO": "ASL"
        },
        {
            "Name": "AirSF Flight Services",
            "Code": "",
            "ICAO": "XSN"
        },
        {
            "Name": "AirShare",
            "Code": "",
            "ICAO": "XSR"
        },
        {
            "Name": "AirSial",
            "Code": "PF",
            "ICAO": "SIF"
        },
        {
            "Name": "AirSmart",
            "Code": "",
            "ICAO": "XSM"
        },
        {
            "Name": "AirSprint",
            "Code": "",
            "ICAO": "ASP"
        },
        {
            "Name": "AirSWIFT",
            "Code": "T6",
            "ICAO": "ATX"
        },
        {
            "Name": "AirTanker",
            "Code": "9L",
            "ICAO": "TOW"
        },
        {
            "Name": "Airwing",
            "Code": "",
            "ICAO": "NWG"
        },
        {
            "Name": "Airwork",
            "Code": "",
            "ICAO": "AWK"
        },
        {
            "Name": "AIS Airlines",
            "Code": "",
            "ICAO": "PNX"
        },
        {
            "Name": "Ajwaa Airlines",
            "Code": "",
            "ICAO": "AJY"
        },
        {
            "Name": "Akasa Air",
            "Code": "QP",
            "ICAO": "AKJ"
        },
        {
            "Name": "Al-Atheer Aviation",
            "Code": "",
            "ICAO": "ATE"
        },
        {
            "Name": "Al-Naser Wings",
            "Code": "NG",
            "ICAO": "NAD"
        },
        {
            "Name": "Alante Air Charter",
            "Code": "",
            "ICAO": "SVL"
        },
        {
            "Name": "Alaska Airlines",
            "Code": "AS",
            "ICAO": "ASA"
        },
        {
            "Name": "Alaska Central Express",
            "Code": "KO",
            "ICAO": "AER"
        },
        {
            "Name": "AlbaStar",
            "Code": "AP",
            "ICAO": "LAV"
        },
        {
            "Name": "Albatros Airlines",
            "Code": "G0",
            "ICAO": "GAL"
        },
        {
            "Name": "Albawings",
            "Code": "2B",
            "ICAO": "AWT"
        },
        {
            "Name": "Albinati Aeronautics",
            "Code": "",
            "ICAO": "LUC"
        },
        {
            "Name": "Albinati Aeronautics",
            "Code": "",
            "ICAO": "ULC"
        },
        {
            "Name": "Alexandria Airlines",
            "Code": "DQ",
            "ICAO": "KHH"
        },
        {
            "Name": "Alfa Airlines",
            "Code": "5E",
            "ICAO": "AJJ"
        },
        {
            "Name": "Algonquin Airlink",
            "Code": "",
            "ICAO": "FSY"
        },
        {
            "Name": "Alidaunia",
            "Code": "D4",
            "ICAO": "LID"
        },
        {
            "Name": "AlisCargo Airlines",
            "Code": "CP",
            "ICAO": "LSI"
        },
        {
            "Name": "Aliserio",
            "Code": "",
            "ICAO": "TJD"
        },
        {
            "Name": "ALK Airlines",
            "Code": "",
            "ICAO": "VBB"
        },
        {
            "Name": "Alkan Air",
            "Code": "",
            "ICAO": "ALN"
        },
        {
            "Name": "Alkan Air",
            "Code": "",
            "ICAO": "AKN"
        },
        {
            "Name": "All Nippon Airways",
            "Code": "NH",
            "ICAO": "ANA"
        },
        {
            "Name": "Allegiant Air",
            "Code": "G4",
            "ICAO": "AAY"
        },
        {
            "Name": "Alliance Air",
            "Code": "9I",
            "ICAO": "LLR"
        },
        {
            "Name": "Alliance Airlines",
            "Code": "QQ",
            "ICAO": "UTY"
        },
        {
            "Name": "Allied Air",
            "Code": "4W",
            "ICAO": "AJK"
        },
        {
            "Name": "AlMasria Universal Airlines",
            "Code": "UJ",
            "ICAO": "LMU"
        },
        {
            "Name": "Aloha Air Cargo",
            "Code": "KH",
            "ICAO": "AAH"
        },
        {
            "Name": "Alphaland Aviation",
            "Code": "",
            "ICAO": "BIC"
        },
        {
            "Name": "Alpine Air Express",
            "Code": "5A",
            "ICAO": "AIP"
        },
        {
            "Name": "Alpine Flightservice",
            "Code": "",
            "ICAO": "FSE"
        },
        {
            "Name": "Alrosa",
            "Code": "6R",
            "ICAO": "DRU"
        },
        {
            "Name": "ALS",
            "Code": "",
            "ICAO": "ALW"
        },
        {
            "Name": "Altagna",
            "Code": "",
            "ICAO": "AGH"
        },
        {
            "Name": "Amakusa Airlines",
            "Code": "MZ",
            "ICAO": "AHX"
        },
        {
            "Name": "Amapola Flyg",
            "Code": "HP",
            "ICAO": "APF"
        },
        {
            "Name": "Amaszonas",
            "Code": "Z8",
            "ICAO": "AZN"
        },
        {
            "Name": "AMC Airlines",
            "Code": "",
            "ICAO": "AMV"
        },
        {
            "Name": "AMC Aviation",
            "Code": "",
            "ICAO": "AMQ"
        },
        {
            "Name": "Amelia",
            "Code": "8R",
            "ICAO": "AIA"
        },
        {
            "Name": "Amelia International",
            "Code": "NL",
            "ICAO": "AEH"
        },
        {
            "Name": "American Air Charter",
            "Code": "",
            "ICAO": "GTW"
        },
        {
            "Name": "American Airlines",
            "Code": "AA",
            "ICAO": "AAL"
        },
        {
            "Name": "Ameriflight",
            "Code": "A8",
            "ICAO": "AMF"
        },
        {
            "Name": "Amerijet International",
            "Code": "M6",
            "ICAO": "AJT"
        },
        {
            "Name": "Ameristar",
            "Code": "7Z",
            "ICAO": "AJI"
        },
        {
            "Name": "AMREF Flying Doctors",
            "Code": "",
            "ICAO": "FDS"
        },
        {
            "Name": "AMS Airlines",
            "Code": "",
            "ICAO": "GEO"
        },
        {
            "Name": "ANA Wings",
            "Code": "EH",
            "ICAO": "AKX"
        },
        {
            "Name": "Anap Jets",
            "Code": "",
            "ICAO": "AJP"
        },
        {
            "Name": "Anda Air",
            "Code": "DM",
            "ICAO": "SSV"
        },
        {
            "Name": "Andes Lineas Aereas",
            "Code": "",
            "ICAO": "ANS"
        },
        {
            "Name": "Angara Airlines",
            "Code": "2G",
            "ICAO": "AGU"
        },
        {
            "Name": "Anguilla Air Services",
            "Code": "Q3",
            "ICAO": "AXL"
        },
        {
            "Name": "Animawings",
            "Code": "A2",
            "ICAO": "AWG"
        },
        {
            "Name": "Antonov Airlines",
            "Code": "",
            "ICAO": "ADB"
        },
        {
            "Name": "APG Airlines",
            "Code": "GP",
            "ICAO": "RIV"
        },
        {
            "Name": "Arajet",
            "Code": "DM",
            "ICAO": "DWI"
        },
        {
            "Name": "Arcus Air",
            "Code": "",
            "ICAO": "AZE"
        },
        {
            "Name": "Ariana Afghan Airlines",
            "Code": "FG",
            "ICAO": "AFG"
        },
        {
            "Name": "Arik Air",
            "Code": "W3",
            "ICAO": "ARA"
        },
        {
            "Name": "Arkhangelsk Airlines",
            "Code": "",
            "ICAO": "OAO"
        },
        {
            "Name": "Arkia Israeli Airlines",
            "Code": "IZ",
            "ICAO": "AIZ"
        },
        {
            "Name": "Armenia Airways",
            "Code": "6A",
            "ICAO": "AMW"
        },
        {
            "Name": "Aruba Airlines",
            "Code": "AG",
            "ICAO": "ARU"
        },
        {
            "Name": "ASAS Linhas Aereas",
            "Code": "",
            "ICAO": "CEU"
        },
        {
            "Name": "ASG Business Aviation",
            "Code": "",
            "ICAO": "ESW"
        },
        {
            "Name": "Asia Pacific Airlines",
            "Code": "P9",
            "ICAO": "MGE"
        },
        {
            "Name": "Asia Sky Lines",
            "Code": "",
            "ICAO": "LIC"
        },
        {
            "Name": "Asiana Airlines",
            "Code": "OZ",
            "ICAO": "AAR"
        },
        {
            "Name": "Asky Airlines",
            "Code": "KP",
            "ICAO": "SKK"
        },
        {
            "Name": "ASL Airlines",
            "Code": "",
            "ICAO": "ABR"
        },
        {
            "Name": "ASL Airlines Belgium",
            "Code": "3V",
            "ICAO": "TAY"
        },
        {
            "Name": "ASL Airlines France",
            "Code": "5O",
            "ICAO": "FPO"
        },
        {
            "Name": "ASL Airlines Hungary",
            "Code": "",
            "ICAO": "FAH"
        },
        {
            "Name": "ASL Airlines UK",
            "Code": "",
            "ICAO": "ABV"
        },
        {
            "Name": "Asta Linhas Aereas",
            "Code": "0A",
            "ICAO": "SUL"
        },
        {
            "Name": "Astonjet",
            "Code": "",
            "ICAO": "ASJ"
        },
        {
            "Name": "Astral Aviation",
            "Code": "8V",
            "ICAO": "ACP"
        },
        {
            "Name": "ATA Airlines",
            "Code": "I3",
            "ICAO": "TBZ"
        },
        {
            "Name": "ATI Jet",
            "Code": "",
            "ICAO": "CYO"
        },
        {
            "Name": "Atlantic Airways",
            "Code": "RC",
            "ICAO": "FLI"
        },
        {
            "Name": "Atlas Air",
            "Code": "5Y",
            "ICAO": "GTI"
        },
        {
            "Name": "Atlas Air Service",
            "Code": "",
            "ICAO": "ATL"
        },
        {
            "Name": "Atran",
            "Code": "V8",
            "ICAO": "VAS"
        },
        {
            "Name": "Auckland Rescue Helicopter",
            "Code": "",
            "ICAO": "WPR"
        },
        {
            "Name": "Aura Airlines",
            "Code": "U5",
            "ICAO": "GWR"
        },
        {
            "Name": "Auric Air",
            "Code": "UI",
            "ICAO": "AUK"
        },
        {
            "Name": "Aurigny Air Services",
            "Code": "GR",
            "ICAO": "AUR"
        },
        {
            "Name": "Aurora",
            "Code": "HZ",
            "ICAO": "SHU"
        },
        {
            "Name": "Austrian Airlines",
            "Code": "OS",
            "ICAO": "AUA"
        },
        {
            "Name": "Av8Jet",
            "Code": "",
            "ICAO": "AJO"
        },
        {
            "Name": "Avanti Air",
            "Code": "",
            "ICAO": "ATV"
        },
        {
            "Name": "Avcenter",
            "Code": "",
            "ICAO": "TTE"
        },
        {
            "Name": "Avcon Jet",
            "Code": "",
            "ICAO": "AOJ"
        },
        {
            "Name": "Avcon Jet Malta",
            "Code": "",
            "ICAO": "VCJ"
        },
        {
            "Name": "Avcon Jet San Marino",
            "Code": "",
            "ICAO": "VAJ"
        },
        {
            "Name": "Avelo Airlines",
            "Code": "XP",
            "ICAO": "VXP"
        },
        {
            "Name": "Avia Traffic",
            "Code": "YK",
            "ICAO": "AVJ"
        },
        {
            "Name": "Aviacon Zitotrans",
            "Code": "ZR",
            "ICAO": "AZS"
        },
        {
            "Name": "Avianca",
            "Code": "AV",
            "ICAO": "AVA"
        },
        {
            "Name": "Avianca Cargo",
            "Code": "QT",
            "ICAO": "TPA"
        },
        {
            "Name": "Avianca Central America",
            "Code": "TA",
            "ICAO": "TAI"
        },
        {
            "Name": "Avianca Costa Rica",
            "Code": "LR",
            "ICAO": "LRC"
        },
        {
            "Name": "Avianca Ecuador",
            "Code": "2K",
            "ICAO": "GLG"
        },
        {
            "Name": "Avianca Express",
            "Code": "EX",
            "ICAO": "AVR"
        },
        {
            "Name": "Avianca Guatemala",
            "Code": "GU",
            "ICAO": "GUG"
        },
        {
            "Name": "Aviastar",
            "Code": "",
            "ICAO": "VIT"
        },
        {
            "Name": "Aviastar-TU",
            "Code": "4B",
            "ICAO": "TUP"
        },
        {
            "Name": "Aviation Advisor",
            "Code": "",
            "ICAO": "LKF"
        },
        {
            "Name": "Aviation Horizons",
            "Code": "ZS",
            "ICAO": "HZS"
        },
        {
            "Name": "Avion Express",
            "Code": "X9",
            "ICAO": "NVD"
        },
        {
            "Name": "Avion Express Malta",
            "Code": "X8",
            "ICAO": "MLH"
        },
        {
            "Name": "Avionord",
            "Code": "",
            "ICAO": "VND"
        },
        {
            "Name": "Avior Airlines",
            "Code": "9V",
            "ICAO": "ROI"
        },
        {
            "Name": "Aviostart",
            "Code": "",
            "ICAO": "VSR"
        },
        {
            "Name": "Azerbaijan Airlines",
            "Code": "J2",
            "ICAO": "AHY"
        },
        {
            "Name": "Azimuth",
            "Code": "A4",
            "ICAO": "AZO"
        },
        {
            "Name": "Azman Air",
            "Code": "ZQ",
            "ICAO": "AZM"
        },
        {
            "Name": "Azores Airlines",
            "Code": "S4",
            "ICAO": "RZO"
        },
        {
            "Name": "Aztec Airways",
            "Code": "AJ",
            "ICAO": "AZY"
        },
        {
            "Name": "Azul Conecta",
            "Code": "2F",
            "ICAO": "ACN"
        },
        {
            "Name": "Azul Linhas Aereas",
            "Code": "AD",
            "ICAO": "AZU"
        },
        {
            "Name": "Azur Air",
            "Code": "ZF",
            "ICAO": "AZV"
        },
        {
            "Name": "Azur Air Ukraine",
            "Code": "QU",
            "ICAO": "UTN"
        },
        {
            "Name": "BA CityFlyer",
            "Code": "CJ",
            "ICAO": "CFE"
        },
        {
            "Name": "Babcock MCS Espana",
            "Code": "",
            "ICAO": "INR"
        },
        {
            "Name": "Babcock MCS France",
            "Code": "",
            "ICAO": "PTH"
        },
        {
            "Name": "Babcock MCS Italia",
            "Code": "",
            "ICAO": "ELH"
        },
        {
            "Name": "Babcock MCS Offshore",
            "Code": "",
            "ICAO": "BND"
        },
        {
            "Name": "Babcock MCS Onshore",
            "Code": "",
            "ICAO": "RHD"
        },
        {
            "Name": "Babcock MCS Portugal",
            "Code": "",
            "ICAO": "BBO"
        },
        {
            "Name": "Babcock Scandinavian AirAmbulance",
            "Code": "",
            "ICAO": "DFL"
        },
        {
            "Name": "Babcock Scandinavian AirAmbulance",
            "Code": "",
            "ICAO": "BNO"
        },
        {
            "Name": "Baden Aircraft Operations",
            "Code": "",
            "ICAO": "BAO"
        },
        {
            "Name": "Badr Airlines",
            "Code": "J4",
            "ICAO": "BDR"
        },
        {
            "Name": "BAe Systems",
            "Code": "",
            "ICAO": "BAE"
        },
        {
            "Name": "BAe Systems Marine",
            "Code": "",
            "ICAO": "VSB"
        },
        {
            "Name": "Bahamasair",
            "Code": "UP",
            "ICAO": "BHS"
        },
        {
            "Name": "Bairline",
            "Code": "",
            "ICAO": "BRJ"
        },
        {
            "Name": "Bakhtar Afghan Airlines",
            "Code": "BM",
            "ICAO": "BFO"
        },
        {
            "Name": "Bamboo Airways",
            "Code": "QH",
            "ICAO": "BAV"
        },
        {
            "Name": "Bangkok Airways",
            "Code": "PG",
            "ICAO": "BKP"
        },
        {
            "Name": "BankAir",
            "Code": "",
            "ICAO": "BKA"
        },
        {
            "Name": "Bar XH Air",
            "Code": "",
            "ICAO": "BXH"
        },
        {
            "Name": "Baron Aviation Services",
            "Code": "",
            "ICAO": "BVN"
        },
        {
            "Name": "Bassaka Air",
            "Code": "5B",
            "ICAO": "BSX"
        },
        {
            "Name": "Batik Air",
            "Code": "ID",
            "ICAO": "BTK"
        },
        {
            "Name": "Batik Air Malaysia",
            "Code": "OD",
            "ICAO": "MXD"
        },
        {
            "Name": "Bearskin Airlines",
            "Code": "JV",
            "ICAO": "BLS"
        },
        {
            "Name": "Bees Airline",
            "Code": "7B",
            "ICAO": "UBE"
        },
        {
            "Name": "Beijing Airlines",
            "Code": "",
            "ICAO": "BJN"
        },
        {
            "Name": "Bel Air Aviation",
            "Code": "",
            "ICAO": "BBX"
        },
        {
            "Name": "Belavia",
            "Code": "B2",
            "ICAO": "BRU"
        },
        {
            "Name": "Bemidji Airlines",
            "Code": "CH",
            "ICAO": "BMJ"
        },
        {
            "Name": "Bering Air",
            "Code": "8E",
            "ICAO": "BRG"
        },
        {
            "Name": "Berjaya Air",
            "Code": "J8",
            "ICAO": "BVT"
        },
        {
            "Name": "Berniq Airways",
            "Code": "NB",
            "ICAO": "BNL"
        },
        {
            "Name": "Berry Aviation",
            "Code": "",
            "ICAO": "BYA"
        },
        {
            "Name": "Bestfly Aruba",
            "Code": "",
            "ICAO": "BFY"
        },
        {
            "Name": "Bestfly Cabo Verde",
            "Code": "3B",
            "ICAO": "BCV"
        },
        {
            "Name": "BH Air",
            "Code": "8H",
            "ICAO": "BGH"
        },
        {
            "Name": "Bhutan Airlines",
            "Code": "B3",
            "ICAO": "BTN"
        },
        {
            "Name": "Bighorn Airways",
            "Code": "",
            "ICAO": "BHR"
        },
        {
            "Name": "Biman Bangladesh Airlines",
            "Code": "BG",
            "ICAO": "BBC"
        },
        {
            "Name": "BinAir",
            "Code": "",
            "ICAO": "BID"
        },
        {
            "Name": "Binter Canarias",
            "Code": "NT",
            "ICAO": "IBB"
        },
        {
            "Name": "Bioflight",
            "Code": "",
            "ICAO": "BIO"
        },
        {
            "Name": "Bismillah Airlines",
            "Code": "BH",
            "ICAO": "BML"
        },
        {
            "Name": "Blue Air",
            "Code": "0B",
            "ICAO": "BLA"
        },
        {
            "Name": "Blue Bird Aviation",
            "Code": "",
            "ICAO": "BLB"
        },
        {
            "Name": "Blue Dart Aviation",
            "Code": "BZ",
            "ICAO": "BDA"
        },
        {
            "Name": "Blue Islands",
            "Code": "SI",
            "ICAO": "BCI"
        },
        {
            "Name": "Blue Square Aviation",
            "Code": "",
            "ICAO": "BSG"
        },
        {
            "Name": "Bluebird Airways",
            "Code": "BZ",
            "ICAO": "BBG"
        },
        {
            "Name": "Bluebird Aviation",
            "Code": "",
            "ICAO": "BBZ"
        },
        {
            "Name": "Bluebird Nordic",
            "Code": "BO",
            "ICAO": "BBD"
        },
        {
            "Name": "Boeing",
            "Code": "",
            "ICAO": "BOE"
        },
        {
            "Name": "Boliviana de Aviacion",
            "Code": "OB",
            "ICAO": "BOV"
        },
        {
            "Name": "Bookajet",
            "Code": "",
            "ICAO": "BOO"
        },
        {
            "Name": "Boutique Air",
            "Code": "4B",
            "ICAO": "BTQ"
        },
        {
            "Name": "BRA",
            "Code": "TF",
            "ICAO": "BRX"
        },
        {
            "Name": "Bravo Airways",
            "Code": "",
            "ICAO": "BAY"
        },
        {
            "Name": "Breeze Airways",
            "Code": "MX",
            "ICAO": "MXY"
        },
        {
            "Name": "Bristow Helicopters",
            "Code": "",
            "ICAO": "BHL"
        },
        {
            "Name": "Bristow Nigeria",
            "Code": "",
            "ICAO": "BHN"
        },
        {
            "Name": "Bristow Norway",
            "Code": "",
            "ICAO": "NOR"
        },
        {
            "Name": "Bristow US",
            "Code": "L9",
            "ICAO": "BTZ"
        },
        {
            "Name": "British Airways",
            "Code": "BA",
            "ICAO": "BAW"
        },
        {
            "Name": "British Airways Shuttle",
            "Code": "",
            "ICAO": "SHT"
        },
        {
            "Name": "Bromma Air Maintenance",
            "Code": "",
            "ICAO": "CFL"
        },
        {
            "Name": "Brussels Airlines",
            "Code": "SN",
            "ICAO": "BEL"
        },
        {
            "Name": "Budapest Aircraft Service",
            "Code": "RP",
            "ICAO": "BPS"
        },
        {
            "Name": "Buddha Air",
            "Code": "U4",
            "ICAO": "BHA"
        },
        {
            "Name": "Budget Lines",
            "Code": "BD",
            "ICAO": "BGN"
        },
        {
            "Name": "Buffalo Airways",
            "Code": "",
            "ICAO": "BFL"
        },
        {
            "Name": "Bul Air",
            "Code": "LB",
            "ICAO": "BVL"
        },
        {
            "Name": "Bulgaria - Government",
            "Code": "",
            "ICAO": "BGF"
        },
        {
            "Name": "Bulgaria Air",
            "Code": "FB",
            "ICAO": "LZB"
        },
        {
            "Name": "Buraq Air",
            "Code": "UZ",
            "ICAO": "BRQ"
        },
        {
            "Name": "Business Wings",
            "Code": "",
            "ICAO": "JMP"
        },
        {
            "Name": "Buzz",
            "Code": "RR",
            "ICAO": "RYS"
        },
        {
            "Name": "BySky",
            "Code": "",
            "ICAO": "BYS"
        },
        {
            "Name": "C&M Airways",
            "Code": "",
            "ICAO": "RWG"
        },
        {
            "Name": "Cabo Verde Airlines",
            "Code": "VR",
            "ICAO": "TCV"
        },
        {
            "Name": "Caicos Express Airways",
            "Code": "9Q",
            "ICAO": "CXE"
        },
        {
            "Name": "CAL Cargo Airlines",
            "Code": "5C",
            "ICAO": "ICL"
        },
        {
            "Name": "Calafia Airlines",
            "Code": "A7",
            "ICAO": "CFV"
        },
        {
            "Name": "Calm Air",
            "Code": "MO",
            "ICAO": "CAV"
        },
        {
            "Name": "Calstar",
            "Code": "",
            "ICAO": "CMD"
        },
        {
            "Name": "Camair-Co",
            "Code": "QC",
            "ICAO": "CRC"
        },
        {
            "Name": "Cambodia Airways",
            "Code": "KR",
            "ICAO": "KME"
        },
        {
            "Name": "Cambodia Angkor Air",
            "Code": "K6",
            "ICAO": "KHV"
        },
        {
            "Name": "Cambodia Bayon Airlines",
            "Code": "BD",
            "ICAO": "BYC"
        },
        {
            "Name": "Cameroon Airlines",
            "Code": "UY",
            "ICAO": "UYC"
        },
        {
            "Name": "Camex Airlines",
            "Code": "",
            "ICAO": "CMS"
        },
        {
            "Name": "Canada - Department of Transport",
            "Code": "",
            "ICAO": "TGO"
        },
        {
            "Name": "Canadian Airways Congo",
            "Code": "",
            "ICAO": "TWC"
        },
        {
            "Name": "Canadian North",
            "Code": "5T",
            "ICAO": "AKT"
        },
        {
            "Name": "Canarias Airlines",
            "Code": "",
            "ICAO": "RSC"
        },
        {
            "Name": "CanaryFly",
            "Code": "PM",
            "ICAO": "CNF"
        },
        {
            "Name": "Canavia",
            "Code": "",
            "ICAO": "CNA"
        },
        {
            "Name": "Canjet Airlines",
            "Code": "C6",
            "ICAO": "CJA"
        },
        {
            "Name": "Canlink Aviation",
            "Code": "",
            "ICAO": "MFC"
        },
        {
            "Name": "CanWest Air",
            "Code": "",
            "ICAO": "CWA"
        },
        {
            "Name": "Cape Air",
            "Code": "9K",
            "ICAO": "KAP"
        },
        {
            "Name": "Capital Air Ambulance",
            "Code": "",
            "ICAO": "EGL"
        },
        {
            "Name": "Capital Airlines",
            "Code": "JD",
            "ICAO": "CBJ"
        },
        {
            "Name": "Capital City Air Carriers",
            "Code": "",
            "ICAO": "CCQ"
        },
        {
            "Name": "Cardiff Aviation Malta",
            "Code": "",
            "ICAO": "SGO"
        },
        {
            "Name": "Cardig Air",
            "Code": "",
            "ICAO": "CAD"
        },
        {
            "Name": "CareFlight",
            "Code": "",
            "ICAO": "CFH"
        },
        {
            "Name": "Cargo Air",
            "Code": "",
            "ICAO": "CGF"
        },
        {
            "Name": "Cargo Three",
            "Code": "C3",
            "ICAO": "CTW"
        },
        {
            "Name": "Cargojet Airways",
            "Code": "W8",
            "ICAO": "CJT"
        },
        {
            "Name": "CargoLogic Germany",
            "Code": "6L",
            "ICAO": "GCL"
        },
        {
            "Name": "CargoLogicAir",
            "Code": "P3",
            "ICAO": "CLU"
        },
        {
            "Name": "Cargolux",
            "Code": "CV",
            "ICAO": "CLX"
        },
        {
            "Name": "Cargolux Italia",
            "Code": "C8",
            "ICAO": "ICV"
        },
        {
            "Name": "Caribbean Airlines",
            "Code": "BW",
            "ICAO": "BWA"
        },
        {
            "Name": "Carpatair",
            "Code": "V3",
            "ICAO": "KRP"
        },
        {
            "Name": "Carson Air",
            "Code": "",
            "ICAO": "CRN"
        },
        {
            "Name": "Caspian Airlines",
            "Code": "RV",
            "ICAO": "CPN"
        },
        {
            "Name": "Castle Aviation",
            "Code": "",
            "ICAO": "CSJ"
        },
        {
            "Name": "CAT Aviation",
            "Code": "",
            "ICAO": "CAZ"
        },
        {
            "Name": "Cathay Pacific",
            "Code": "CX",
            "ICAO": "CPA"
        },
        {
            "Name": "Catreus",
            "Code": "",
            "ICAO": "VCG"
        },
        {
            "Name": "Cavok Air",
            "Code": "",
            "ICAO": "CVK"
        },
        {
            "Name": "Cayman Airways",
            "Code": "KX",
            "ICAO": "CAY"
        },
        {
            "Name": "Cebgo",
            "Code": "DG",
            "ICAO": "SRQ"
        },
        {
            "Name": "Cebu Pacific",
            "Code": "5J",
            "ICAO": "CEB"
        },
        {
            "Name": "Ceiba Intercontinental",
            "Code": "C2",
            "ICAO": "CEL"
        },
        {
            "Name": "CemAir",
            "Code": "5Z",
            "ICAO": "KEM"
        },
        {
            "Name": "Central Air Southwest",
            "Code": "",
            "ICAO": "CTL"
        },
        {
            "Name": "Central Airlines",
            "Code": "I9",
            "ICAO": "HLF"
        },
        {
            "Name": "Central Mountain Air",
            "Code": "9M",
            "ICAO": "GLR"
        },
        {
            "Name": "Centreline",
            "Code": "",
            "ICAO": "CLF"
        },
        {
            "Name": "Chabahar Airlines",
            "Code": "",
            "ICAO": "IRU"
        },
        {
            "Name": "Chair Airlines",
            "Code": "GM",
            "ICAO": "GSW"
        },
        {
            "Name": "Chalair Aviation",
            "Code": "CE",
            "ICAO": "CLG"
        },
        {
            "Name": "Challenge Airlines",
            "Code": "X7",
            "ICAO": "CHG"
        },
        {
            "Name": "Cham Wings Airlines",
            "Code": "6Q",
            "ICAO": "SAW"
        },
        {
            "Name": "Charter Jets",
            "Code": "",
            "ICAO": "LTC"
        },
        {
            "Name": "Chartright Air",
            "Code": "",
            "ICAO": "HRT"
        },
        {
            "Name": "CHC Helicopter",
            "Code": "",
            "ICAO": "HMB"
        },
        {
            "Name": "CHC Helicopters Netherlands",
            "Code": "",
            "ICAO": "HNL"
        },
        {
            "Name": "CHC Helicopters Nigeria",
            "Code": "",
            "ICAO": "ATQ"
        },
        {
            "Name": "CHC Helikopter Service",
            "Code": "",
            "ICAO": "HKS"
        },
        {
            "Name": "CHC International",
            "Code": "",
            "ICAO": "GCY"
        },
        {
            "Name": "Chengdu Airlines",
            "Code": "EU",
            "ICAO": "UEA"
        },
        {
            "Name": "Chervon Corporation",
            "Code": "",
            "ICAO": "GLH"
        },
        {
            "Name": "Chicago Jet Group",
            "Code": "",
            "ICAO": "WDY"
        },
        {
            "Name": "China Airlines",
            "Code": "CI",
            "ICAO": "CAL"
        },
        {
            "Name": "China Cargo Airlines",
            "Code": "CK",
            "ICAO": "CKK"
        },
        {
            "Name": "China Central Longhao Airlines",
            "Code": "GI",
            "ICAO": "LHA"
        },
        {
            "Name": "China Eastern Airlines",
            "Code": "MU",
            "ICAO": "CES"
        },
        {
            "Name": "China Express Airlines",
            "Code": "G5",
            "ICAO": "HXA"
        },
        {
            "Name": "China Postal Airlines",
            "Code": "CF",
            "ICAO": "CYZ"
        },
        {
            "Name": "China Southern Airlines",
            "Code": "CZ",
            "ICAO": "CSN"
        },
        {
            "Name": "China Southern Cargo",
            "Code": "",
            "ICAO": "CSG"
        },
        {
            "Name": "China United Airlines",
            "Code": "KN",
            "ICAO": "CUA"
        },
        {
            "Name": "Chongqing Airlines",
            "Code": "OQ",
            "ICAO": "CQN"
        },
        {
            "Name": "Chrono Aviation",
            "Code": "",
            "ICAO": "NDL"
        },
        {
            "Name": "Chrono Jet",
            "Code": "MB",
            "ICAO": "MBK"
        },
        {
            "Name": "Cinnamon Air",
            "Code": "C7",
            "ICAO": "CIN"
        },
        {
            "Name": "CITIC Offshore Helicopter",
            "Code": "",
            "ICAO": "CHC"
        },
        {
            "Name": "Citilink",
            "Code": "QG",
            "ICAO": "CTV"
        },
        {
            "Name": "Cityjet",
            "Code": "WX",
            "ICAO": "BCY"
        },
        {
            "Name": "Civil Air Patrol",
            "Code": "",
            "ICAO": "CAP"
        },
        {
            "Name": "Class Aviation",
            "Code": "",
            "ICAO": "DUC"
        },
        {
            "Name": "Clipper Jet",
            "Code": "",
            "ICAO": "ORO"
        },
        {
            "Name": "CM Airlines",
            "Code": "CC",
            "ICAO": "OMT"
        },
        {
            "Name": "CMA CGM AirCargo",
            "Code": "2C",
            "ICAO": "CMA"
        },
        {
            "Name": "Coastal Aviation",
            "Code": "CQ",
            "ICAO": "CSV"
        },
        {
            "Name": "Cobalt Air",
            "Code": "CO",
            "ICAO": "FCB"
        },
        {
            "Name": "Cobham Aviation",
            "Code": "NC",
            "ICAO": "JTE"
        },
        {
            "Name": "Cobham Aviation Services Australia",
            "Code": "",
            "ICAO": "NJS"
        },
        {
            "Name": "Cobham Flight Inspection",
            "Code": "",
            "ICAO": "CLB"
        },
        {
            "Name": "Colorful GuiZhou Airlines",
            "Code": "GY",
            "ICAO": "CGZ"
        },
        {
            "Name": "Comair",
            "Code": "MN",
            "ICAO": "CAW"
        },
        {
            "Name": "Comlux Aruba",
            "Code": "CS",
            "ICAO": "CXB"
        },
        {
            "Name": "Comlux Aviation",
            "Code": "",
            "ICAO": "CLA"
        },
        {
            "Name": "Comlux Aviation Malta",
            "Code": "",
            "ICAO": "MLM"
        },
        {
            "Name": "CommutAir",
            "Code": "C5",
            "ICAO": "UCA"
        },
        {
            "Name": "Compagnia Aeronautica Italiana",
            "Code": "",
            "ICAO": "CPI"
        },
        {
            "Name": "Compass Cargo Airlines",
            "Code": "",
            "ICAO": "ADZ"
        },
        {
            "Name": "Conair",
            "Code": "",
            "ICAO": "FGD"
        },
        {
            "Name": "Condor",
            "Code": "DE",
            "ICAO": "CFG"
        },
        {
            "Name": "Congo Airways",
            "Code": "8Z",
            "ICAO": "CGA"
        },
        {
            "Name": "Connect Airlines",
            "Code": "MW",
            "ICAO": "WZM"
        },
        {
            "Name": "Connect Linhas Aereas",
            "Code": "6C",
            "ICAO": "CNT"
        },
        {
            "Name": "Conquest Air",
            "Code": "C4",
            "ICAO": "QAI"
        },
        {
            "Name": "Contour Aviation",
            "Code": "LF",
            "ICAO": "VTE"
        },
        {
            "Name": "Conviasa",
            "Code": "V0",
            "ICAO": "VCV"
        },
        {
            "Name": "Copa Airlines",
            "Code": "CM",
            "ICAO": "CMP"
        },
        {
            "Name": "Copenhagen Airtaxi",
            "Code": "",
            "ICAO": "CAT"
        },
        {
            "Name": "Corendon Airlines",
            "Code": "XC",
            "ICAO": "CAI"
        },
        {
            "Name": "Corendon Airlines Europe",
            "Code": "XR",
            "ICAO": "CXI"
        },
        {
            "Name": "Corendon Dutch Airlines",
            "Code": "CD",
            "ICAO": "CND"
        },
        {
            "Name": "Corporate Air",
            "Code": "",
            "ICAO": "CPT"
        },
        {
            "Name": "Corporate Air",
            "Code": "",
            "ICAO": "MLN"
        },
        {
            "Name": "Corsair",
            "Code": "SS",
            "ICAO": "CRL"
        },
        {
            "Name": "Costa Rica Green Airways",
            "Code": "GW",
            "ICAO": "GRA"
        },
        {
            "Name": "Coulson Aviation",
            "Code": "",
            "ICAO": "CUL"
        },
        {
            "Name": "Cristalux",
            "Code": "Z7",
            "ICAO": "AUZ"
        },
        {
            "Name": "Croatia Airlines",
            "Code": "OU",
            "ICAO": "CTN"
        },
        {
            "Name": "Cronos Airlines",
            "Code": "C8",
            "ICAO": "CRA"
        },
        {
            "Name": "Cronos Airlines Benin",
            "Code": "",
            "ICAO": "CKL"
        },
        {
            "Name": "CSA Air",
            "Code": "",
            "ICAO": "IRO"
        },
        {
            "Name": "CSI Aviation",
            "Code": "",
            "ICAO": "CSI"
        },
        {
            "Name": "Cubana",
            "Code": "CU",
            "ICAO": "CUB"
        },
        {
            "Name": "Cygnus Air",
            "Code": "",
            "ICAO": "RGN"
        },
        {
            "Name": "Cyprus Airways",
            "Code": "CY",
            "ICAO": "CYP"
        },
        {
            "Name": "Czech Airlines",
            "Code": "OK",
            "ICAO": "CSA"
        },
        {
            "Name": "Daallo Airlines",
            "Code": "D3",
            "ICAO": "DAO"
        },
        {
            "Name": "Dalian Airlines",
            "Code": "",
            "ICAO": "CCD"
        },
        {
            "Name": "Dan Air",
            "Code": "",
            "ICAO": "JOC"
        },
        {
            "Name": "Dana Air",
            "Code": "9J",
            "ICAO": "DAN"
        },
        {
            "Name": "Dassault Falcon Service",
            "Code": "",
            "ICAO": "DSO"
        },
        {
            "Name": "DAT",
            "Code": "DX",
            "ICAO": "DTR"
        },
        {
            "Name": "DAT LT",
            "Code": "R6",
            "ICAO": "DNU"
        },
        {
            "Name": "DC Aviation",
            "Code": "",
            "ICAO": "DCS"
        },
        {
            "Name": "DEA Aviation",
            "Code": "",
            "ICAO": "WKT"
        },
        {
            "Name": "Deer Jet",
            "Code": "",
            "ICAO": "DER"
        },
        {
            "Name": "Deer Jet Beijing",
            "Code": "",
            "ICAO": "BDJ"
        },
        {
            "Name": "Delta Air Lines",
            "Code": "DL",
            "ICAO": "DAL"
        },
        {
            "Name": "Delta Private Jets",
            "Code": "",
            "ICAO": "DPJ"
        },
        {
            "Name": "Dena Airways",
            "Code": "D9",
            "ICAO": "DAI"
        },
        {
            "Name": "Denim Air",
            "Code": "G6",
            "ICAO": "DNM"
        },
        {
            "Name": "Deraya",
            "Code": "",
            "ICAO": "DRY"
        },
        {
            "Name": "Desert Jet",
            "Code": "",
            "ICAO": "DJR"
        },
        {
            "Name": "DHL",
            "Code": "D0",
            "ICAO": "DHK"
        },
        {
            "Name": "DHL Aero Expreso",
            "Code": "D5",
            "ICAO": "DAE"
        },
        {
            "Name": "DHL Air Austria",
            "Code": "Q7",
            "ICAO": "DHA"
        },
        {
            "Name": "DHL Aviation EEMEA",
            "Code": "ES",
            "ICAO": "DHX"
        },
        {
            "Name": "Diamond Sky",
            "Code": "",
            "ICAO": "DMS"
        },
        {
            "Name": "Directflight",
            "Code": "",
            "ICAO": "DCT"
        },
        {
            "Name": "Divi Divi Air",
            "Code": "3R",
            "ICAO": "DVR"
        },
        {
            "Name": "Dniproavia",
            "Code": "",
            "ICAO": "UDN"
        },
        {
            "Name": "Donghai Airlines",
            "Code": "DZ",
            "ICAO": "EPA"
        },
        {
            "Name": "Dornier Aviation Nigeria Aiep",
            "Code": "DO",
            "ICAO": "DAV"
        },
        {
            "Name": "Douniah Airlines",
            "Code": "DH",
            "ICAO": "DTS"
        },
        {
            "Name": "DragonFly Executive",
            "Code": "",
            "ICAO": "CBM"
        },
        {
            "Name": "Dreamline Aviation",
            "Code": "",
            "ICAO": "DLX"
        },
        {
            "Name": "DRF Luftrettung",
            "Code": "1I",
            "ICAO": "AMB"
        },
        {
            "Name": "Druk Air",
            "Code": "KB",
            "ICAO": "DRK"
        },
        {
            "Name": "Dubai Air Wing",
            "Code": "",
            "ICAO": "DUB"
        },
        {
            "Name": "E+S Air",
            "Code": "",
            "ICAO": "CAH"
        },
        {
            "Name": "E-Aviation",
            "Code": "",
            "ICAO": "EFD"
        },
        {
            "Name": "E-Cargo Airlines",
            "Code": "RF",
            "ICAO": "ERF"
        },
        {
            "Name": "EADS CASA",
            "Code": "",
            "ICAO": "AED"
        },
        {
            "Name": "Eagle Air",
            "Code": "",
            "ICAO": "EGU"
        },
        {
            "Name": "Eagle Air Iceland",
            "Code": "",
            "ICAO": "FEI"
        },
        {
            "Name": "Eagle Airways",
            "Code": "",
            "ICAO": "EAG"
        },
        {
            "Name": "Eagle Atlantic Airlines",
            "Code": "",
            "ICAO": "EAB"
        },
        {
            "Name": "Eagle Creek Aviation",
            "Code": "",
            "ICAO": "EGC"
        },
        {
            "Name": "EagleMed",
            "Code": "",
            "ICAO": "EMD"
        },
        {
            "Name": "East Coast Jets",
            "Code": "",
            "ICAO": "ECJ"
        },
        {
            "Name": "East-West Express",
            "Code": "",
            "ICAO": "EWU"
        },
        {
            "Name": "Eastar Jet",
            "Code": "ZE",
            "ICAO": "ESR"
        },
        {
            "Name": "Eastern Airlines",
            "Code": "2D",
            "ICAO": "EAL"
        },
        {
            "Name": "Eastern Airways",
            "Code": "T3",
            "ICAO": "EZE"
        },
        {
            "Name": "Eastern Australia Airlines",
            "Code": "",
            "ICAO": "EAQ"
        },
        {
            "Name": "EasyFly",
            "Code": "VE",
            "ICAO": "EFY"
        },
        {
            "Name": "easyJet",
            "Code": "U2",
            "ICAO": "EZY"
        },
        {
            "Name": "easyJet Europe",
            "Code": "EC",
            "ICAO": "EJU"
        },
        {
            "Name": "easyJet Switzerland",
            "Code": "DS",
            "ICAO": "EZS"
        },
        {
            "Name": "EATIS",
            "Code": "",
            "ICAO": "SRK"
        },
        {
            "Name": "Eclair Aviation",
            "Code": "",
            "ICAO": "ECC"
        },
        {
            "Name": "ECO Airlines",
            "Code": "",
            "ICAO": "EKO"
        },
        {
            "Name": "EcoJet",
            "Code": "8J",
            "ICAO": "ECO"
        },
        {
            "Name": "Edelweiss Air",
            "Code": "WK",
            "ICAO": "EDW"
        },
        {
            "Name": "EGT Jet",
            "Code": "",
            "ICAO": "EGT"
        },
        {
            "Name": "EgyptAir",
            "Code": "MS",
            "ICAO": "MSR"
        },
        {
            "Name": "EgyptAir Cargo",
            "Code": "",
            "ICAO": "MSX"
        },
        {
            "Name": "El Al",
            "Code": "LY",
            "ICAO": "ELY"
        },
        {
            "Name": "Electra Airways",
            "Code": "",
            "ICAO": "EAF"
        },
        {
            "Name": "Elifriulia",
            "Code": "",
            "ICAO": "EFG"
        },
        {
            "Name": "Elilombarda",
            "Code": "",
            "ICAO": "EOA"
        },
        {
            "Name": "Eliossola",
            "Code": "",
            "ICAO": "EOS"
        },
        {
            "Name": "Elitaliana",
            "Code": "",
            "ICAO": "ELA"
        },
        {
            "Name": "Elitavia",
            "Code": "",
            "ICAO": "EAV"
        },
        {
            "Name": "Elitavia Malta",
            "Code": "MA",
            "ICAO": "EAU"
        },
        {
            "Name": "Elite Air",
            "Code": "",
            "ICAO": "ELZ"
        },
        {
            "Name": "Elite Airways",
            "Code": "7Q",
            "ICAO": "MNU"
        },
        {
            "Name": "Elitellina",
            "Code": "",
            "ICAO": "FGS"
        },
        {
            "Name": "Embraer",
            "Code": "",
            "ICAO": "EMB"
        },
        {
            "Name": "Emerald Airlines",
            "Code": "EA",
            "ICAO": "EAI"
        },
        {
            "Name": "Emetebe.com.ec",
            "Code": "",
            "ICAO": "EMT"
        },
        {
            "Name": "Emirates",
            "Code": "EK",
            "ICAO": "UAE"
        },
        {
            "Name": "Emirates Flight Training Academy",
            "Code": "",
            "ICAO": "EFC"
        },
        {
            "Name": "Emperor Aviation",
            "Code": "",
            "ICAO": "EMM"
        },
        {
            "Name": "Empire Airlines",
            "Code": "EM",
            "ICAO": "CFS"
        },
        {
            "Name": "Empire Aviation",
            "Code": "",
            "ICAO": "MJE"
        },
        {
            "Name": "ENAC Ecole Aviation Civile",
            "Code": "",
            "ICAO": "NAK"
        },
        {
            "Name": "Encore Air Cargo",
            "Code": "",
            "ICAO": "DKT"
        },
        {
            "Name": "Endeavor Air",
            "Code": "9E",
            "ICAO": "EDV"
        },
        {
            "Name": "Enter Air",
            "Code": "E4",
            "ICAO": "ENT"
        },
        {
            "Name": "Envoy Air",
            "Code": "MQ",
            "ICAO": "ENY"
        },
        {
            "Name": "Epsilon Aviation",
            "Code": "",
            "ICAO": "GRV"
        },
        {
            "Name": "Equair",
            "Code": "HN",
            "ICAO": "EQX"
        },
        {
            "Name": "Eritrean Airlines",
            "Code": "B8",
            "ICAO": "ERT"
        },
        {
            "Name": "Estafeta",
            "Code": "E7",
            "ICAO": "ESF"
        },
        {
            "Name": "Estelar",
            "Code": "ES",
            "ICAO": "ETR"
        },
        {
            "Name": "ETF Airways",
            "Code": "LI",
            "ICAO": "EZZ"
        },
        {
            "Name": "Ethiopian Airlines",
            "Code": "ET",
            "ICAO": "ETH"
        },
        {
            "Name": "Etihad Airways",
            "Code": "EY",
            "ICAO": "ETD"
        },
        {
            "Name": "Euro Link",
            "Code": "",
            "ICAO": "EUL"
        },
        {
            "Name": "Euro-Asia Air",
            "Code": "5B",
            "ICAO": "EAK"
        },
        {
            "Name": "EuroAtlantic Airways",
            "Code": "YU",
            "ICAO": "MMZ"
        },
        {
            "Name": "Eurocopter Deutschland",
            "Code": "",
            "ICAO": "RDF"
        },
        {
            "Name": "European Air Charter",
            "Code": "H6",
            "ICAO": "BUC"
        },
        {
            "Name": "European Air Transport",
            "Code": "QY",
            "ICAO": "BCS"
        },
        {
            "Name": "European Cargo",
            "Code": "",
            "ICAO": "URO"
        },
        {
            "Name": "European Flight Academy",
            "Code": "",
            "ICAO": "PTO"
        },
        {
            "Name": "European Flight Service",
            "Code": "",
            "ICAO": "EUW"
        },
        {
            "Name": "European Flyers",
            "Code": "",
            "ICAO": "FYS"
        },
        {
            "Name": "European SAO",
            "Code": "",
            "ICAO": "EKT"
        },
        {
            "Name": "Eurowings",
            "Code": "EW",
            "ICAO": "EWG"
        },
        {
            "Name": "Eurowings Discover",
            "Code": "4Y",
            "ICAO": "OCN"
        },
        {
            "Name": "Eurowings Europe",
            "Code": "E2",
            "ICAO": "EWE"
        },
        {
            "Name": "EVA Air",
            "Code": "BR",
            "ICAO": "EVA"
        },
        {
            "Name": "Everts Air Alaska",
            "Code": "5V",
            "ICAO": "VTS"
        },
        {
            "Name": "EWA Air",
            "Code": "ZD",
            "ICAO": "EWR"
        },
        {
            "Name": "Excellent Air",
            "Code": "",
            "ICAO": "ECA"
        },
        {
            "Name": "Execuflight",
            "Code": "",
            "ICAO": "EFT"
        },
        {
            "Name": "Execujet Middle East",
            "Code": "",
            "ICAO": "EJO"
        },
        {
            "Name": "Execujet Scandinavia",
            "Code": "",
            "ICAO": "VMP"
        },
        {
            "Name": "Executive Jet Charter",
            "Code": "",
            "ICAO": "EXJ"
        },
        {
            "Name": "Executive Jet Management",
            "Code": "",
            "ICAO": "EJM"
        },
        {
            "Name": "Executive Jet Management",
            "Code": "",
            "ICAO": "JME"
        },
        {
            "Name": "Exploits Valley Air Services",
            "Code": "8K",
            "ICAO": "EVS"
        },
        {
            "Name": "Express Air Cargo",
            "Code": "7A",
            "ICAO": "XRC"
        },
        {
            "Name": "Express Freighters Australia",
            "Code": "QE",
            "ICAO": "EFA"
        },
        {
            "Name": "ExpressJet",
            "Code": "EV",
            "ICAO": "ASQ"
        },
        {
            "Name": "ExpressJet Airlines",
            "Code": "XE",
            "ICAO": "BTA"
        },
        {
            "Name": "Exxaero",
            "Code": "",
            "ICAO": "XRO"
        },
        {
            "Name": "EZ Air",
            "Code": "7Z",
            "ICAO": "EZR"
        },
        {
            "Name": "Eznis Airways",
            "Code": "MG",
            "ICAO": "EZA"
        },
        {
            "Name": "FAI rent-a-jet",
            "Code": "",
            "ICAO": "IFA"
        },
        {
            "Name": "Far Eastern Air Transport",
            "Code": "FE",
            "ICAO": "FEA"
        },
        {
            "Name": "Fast Air",
            "Code": "",
            "ICAO": "PBR"
        },
        {
            "Name": "Fastjet",
            "Code": "FN",
            "ICAO": "FTZ"
        },
        {
            "Name": "Fastjet Zimbabwe",
            "Code": "FN",
            "ICAO": "FJW"
        },
        {
            "Name": "FedEx",
            "Code": "FX",
            "ICAO": "FDX"
        },
        {
            "Name": "Fenix Air Charter",
            "Code": "",
            "ICAO": "FNX"
        },
        {
            "Name": "Feuerwehr-Flugdienst Niedersachsen",
            "Code": "",
            "ICAO": "FFD"
        },
        {
            "Name": "Fiji Airways",
            "Code": "FJ",
            "ICAO": "FJI"
        },
        {
            "Name": "Fiji Link",
            "Code": "",
            "ICAO": "FJA"
        },
        {
            "Name": "Finistair",
            "Code": "",
            "ICAO": "FTR"
        },
        {
            "Name": "Finnair",
            "Code": "AY",
            "ICAO": "FIN"
        },
        {
            "Name": "FinnHEMS",
            "Code": "",
            "ICAO": "FIH"
        },
        {
            "Name": "Firefly",
            "Code": "FY",
            "ICAO": "FFM"
        },
        {
            "Name": "First Air",
            "Code": "7F",
            "ICAO": "FAB"
        },
        {
            "Name": "First Nation Airways",
            "Code": "",
            "ICAO": "FRN"
        },
        {
            "Name": "FitsAir",
            "Code": "8D",
            "ICAO": "EXV"
        },
        {
            "Name": "Flair Airlines",
            "Code": "F8",
            "ICAO": "FLE"
        },
        {
            "Name": "Fleet Air International",
            "Code": "",
            "ICAO": "FRF"
        },
        {
            "Name": "Flexflight",
            "Code": "W2",
            "ICAO": "FXT"
        },
        {
            "Name": "Flexjet",
            "Code": "",
            "ICAO": "LXJ"
        },
        {
            "Name": "Flexjet Europe",
            "Code": "",
            "ICAO": "FLJ"
        },
        {
            "Name": "Flexjet Operations Malta",
            "Code": "",
            "ICAO": "FJO"
        },
        {
            "Name": "Flight Calibration Services",
            "Code": "",
            "ICAO": "FCK"
        },
        {
            "Name": "Flight Calibration Services",
            "Code": "",
            "ICAO": "VOR"
        },
        {
            "Name": "Flight options",
            "Code": "",
            "ICAO": "OPT"
        },
        {
            "Name": "Flight Training Europe",
            "Code": "",
            "ICAO": "AYR"
        },
        {
            "Name": "FlightExec",
            "Code": "",
            "ICAO": "FEX"
        },
        {
            "Name": "Flightline",
            "Code": "",
            "ICAO": "FTL"
        },
        {
            "Name": "Flightlink",
            "Code": "YS",
            "ICAO": "FLZ"
        },
        {
            "Name": "Flightpath Charter Airways",
            "Code": "",
            "ICAO": "KNT"
        },
        {
            "Name": "Fltplan",
            "Code": "",
            "ICAO": "DCM"
        },
        {
            "Name": "Flugfelag Islands",
            "Code": "NY",
            "ICAO": "FXI"
        },
        {
            "Name": "Fly 7",
            "Code": "",
            "ICAO": "FSF"
        },
        {
            "Name": "Fly Across",
            "Code": "",
            "ICAO": "ACW"
        },
        {
            "Name": "Fly Africa Zimbabwe",
            "Code": "ZC",
            "ICAO": "FZW"
        },
        {
            "Name": "Fly Air41",
            "Code": "",
            "ICAO": "BER"
        },
        {
            "Name": "Fly AllWays",
            "Code": "8W",
            "ICAO": "EDR"
        },
        {
            "Name": "Fly Angola",
            "Code": "EQ",
            "ICAO": "FLA"
        },
        {
            "Name": "Fly Armenia Airways",
            "Code": "VF",
            "ICAO": "FBB"
        },
        {
            "Name": "Fly Art",
            "Code": "T2",
            "ICAO": "FLB"
        },
        {
            "Name": "Fly Baghdad",
            "Code": "IF",
            "ICAO": "FBA"
        },
        {
            "Name": "Fly Gangwon",
            "Code": "4V",
            "ICAO": "FGW"
        },
        {
            "Name": "Fly Jamaica",
            "Code": "OJ",
            "ICAO": "FJM"
        },
        {
            "Name": "Fly Jordan",
            "Code": "F0",
            "ICAO": "FJR"
        },
        {
            "Name": "Fly One",
            "Code": "5F",
            "ICAO": "FIA"
        },
        {
            "Name": "Fly Oya",
            "Code": "YI",
            "ICAO": "OYA"
        },
        {
            "Name": "Fly Pro",
            "Code": "FP",
            "ICAO": "PVV"
        },
        {
            "Name": "Fly SAX",
            "Code": "",
            "ICAO": "EXZ"
        },
        {
            "Name": "Fly Sky Airlines",
            "Code": "",
            "ICAO": "FSQ"
        },
        {
            "Name": "Fly Sky Airlines",
            "Code": "",
            "ICAO": "FSU"
        },
        {
            "Name": "Fly Tyrol",
            "Code": "",
            "ICAO": "FTY"
        },
        {
            "Name": "Fly2Sky",
            "Code": "",
            "ICAO": "VAW"
        },
        {
            "Name": "Fly540",
            "Code": "5H",
            "ICAO": "FFV"
        },
        {
            "Name": "Flyadeal",
            "Code": "F3",
            "ICAO": "FAD"
        },
        {
            "Name": "FlyArna",
            "Code": "G6",
            "ICAO": "ACY"
        },
        {
            "Name": "Flybe",
            "Code": "BE",
            "ICAO": "BEE"
        },
        {
            "Name": "FlyBig",
            "Code": "S9",
            "ICAO": "FLG"
        },
        {
            "Name": "Flybondi",
            "Code": "FO",
            "ICAO": "FBZ"
        },
        {
            "Name": "FlyBosnia",
            "Code": "6W",
            "ICAO": "FBS"
        },
        {
            "Name": "FlyDamas",
            "Code": "4J",
            "ICAO": "FDK"
        },
        {
            "Name": "FlyDubai",
            "Code": "FZ",
            "ICAO": "FDB"
        },
        {
            "Name": "FlyEgypt",
            "Code": "FT",
            "ICAO": "FEG"
        },
        {
            "Name": "FlyGTA Airlines",
            "Code": "SX",
            "ICAO": "TOR"
        },
        {
            "Name": "Flying Business Aviation",
            "Code": "",
            "ICAO": "FBX"
        },
        {
            "Name": "Flying Service",
            "Code": "",
            "ICAO": "FYG"
        },
        {
            "Name": "FlyMe",
            "Code": "VP",
            "ICAO": "VQI"
        },
        {
            "Name": "FlyMontserrat",
            "Code": "5M",
            "ICAO": "MNT"
        },
        {
            "Name": "Flynas",
            "Code": "XY",
            "ICAO": "KNE"
        },
        {
            "Name": "FlyPelican",
            "Code": "FP",
            "ICAO": "FRE"
        },
        {
            "Name": "Flyr",
            "Code": "FS",
            "ICAO": "FOX"
        },
        {
            "Name": "FlySafair",
            "Code": "FA",
            "ICAO": "SFR"
        },
        {
            "Name": "FlySchool",
            "Code": "",
            "ICAO": "FSM"
        },
        {
            "Name": "FR Aviation",
            "Code": "",
            "ICAO": "FRA"
        },
        {
            "Name": "Freebird Airlines",
            "Code": "FH",
            "ICAO": "FHY"
        },
        {
            "Name": "Freebird Airlines Europe",
            "Code": "",
            "ICAO": "FHM"
        },
        {
            "Name": "Freight Runners Express",
            "Code": "",
            "ICAO": "FRG"
        },
        {
            "Name": "French Bee",
            "Code": "BF",
            "ICAO": "FBU"
        },
        {
            "Name": "Frontier Airlines",
            "Code": "F9",
            "ICAO": "FFT"
        },
        {
            "Name": "Fuji Dream Airlines",
            "Code": "JH",
            "ICAO": "FDA"
        },
        {
            "Name": "Fuzhou Airlines",
            "Code": "FU",
            "ICAO": "FZA"
        },
        {
            "Name": "Galistair",
            "Code": "GH",
            "ICAO": "GTR"
        },
        {
            "Name": "Gama Aviation (UK)",
            "Code": "",
            "ICAO": "GMA"
        },
        {
            "Name": "Gama Aviation (US)",
            "Code": "",
            "ICAO": "GAJ"
        },
        {
            "Name": "Garuda Indonesia",
            "Code": "GA",
            "ICAO": "GIA"
        },
        {
            "Name": "Gazpromavia",
            "Code": "4G",
            "ICAO": "GZP"
        },
        {
            "Name": "General Atomic AeroTech Systems",
            "Code": "",
            "ICAO": "DOR"
        },
        {
            "Name": "Genex",
            "Code": "",
            "ICAO": "GNX"
        },
        {
            "Name": "Genghis Khan Airlines",
            "Code": "9D",
            "ICAO": "NMG"
        },
        {
            "Name": "Geo Sky Airline",
            "Code": "",
            "ICAO": "GEL"
        },
        {
            "Name": "Georgian Airlines",
            "Code": "GH",
            "ICAO": "IGT"
        },
        {
            "Name": "Georgian Airways",
            "Code": "A9",
            "ICAO": "TGZ"
        },
        {
            "Name": "German Airways",
            "Code": "ZQ",
            "ICAO": "GER"
        },
        {
            "Name": "Gesellschaft Fur Flugzieldarstellung",
            "Code": "",
            "ICAO": "GFD"
        },
        {
            "Name": "Gestair",
            "Code": "",
            "ICAO": "GES"
        },
        {
            "Name": "GetJet Airlines",
            "Code": "GW",
            "ICAO": "GJT"
        },
        {
            "Name": "Getjet Airlines Latvia",
            "Code": "",
            "ICAO": "DML"
        },
        {
            "Name": "Ghadames Air Transport",
            "Code": "NJ",
            "ICAO": "GHT"
        },
        {
            "Name": "Global Air Charters",
            "Code": "",
            "ICAO": "GJE"
        },
        {
            "Name": "Global Air Transport",
            "Code": "5S",
            "ICAO": "GAK"
        },
        {
            "Name": "Global Airways",
            "Code": "",
            "ICAO": "GBL"
        },
        {
            "Name": "Global Crossing Airlines",
            "Code": "G6",
            "ICAO": "GXA"
        },
        {
            "Name": "Global Jet Luxembourg",
            "Code": "",
            "ICAO": "SVW"
        },
        {
            "Name": "Global Supply Systems",
            "Code": "",
            "ICAO": "GSS"
        },
        {
            "Name": "GlobeAir",
            "Code": "",
            "ICAO": "GAC"
        },
        {
            "Name": "Globus",
            "Code": "GH",
            "ICAO": "GLP"
        },
        {
            "Name": "Go First",
            "Code": "G8",
            "ICAO": "GOW"
        },
        {
            "Name": "GoJet ",
            "Code": "G7",
            "ICAO": "GJS"
        },
        {
            "Name": "GOL Linhas Aereas",
            "Code": "G3",
            "ICAO": "GLO"
        },
        {
            "Name": "Goldeck Flug",
            "Code": "",
            "ICAO": "GDK"
        },
        {
            "Name": "Golden Myanmar Airlines",
            "Code": "Y5",
            "ICAO": "GMR"
        },
        {
            "Name": "Gouvernement du Quebec",
            "Code": "",
            "ICAO": "QUE"
        },
        {
            "Name": "GP Aviation",
            "Code": "IV",
            "ICAO": "GPX"
        },
        {
            "Name": "Grafair",
            "Code": "",
            "ICAO": "GFM"
        },
        {
            "Name": "Grand Canyon Airlines",
            "Code": "YR",
            "ICAO": "CVU"
        },
        {
            "Name": "Grand China Air",
            "Code": "CN",
            "ICAO": "GDC"
        },
        {
            "Name": "Grant Aviation",
            "Code": "GV",
            "ICAO": "GUN"
        },
        {
            "Name": "Greater Bay Airlines",
            "Code": "HB",
            "ICAO": "HGB"
        },
        {
            "Name": "Green Africa Airways",
            "Code": "Q9",
            "ICAO": "GWG"
        },
        {
            "Name": "Greybird Aviation",
            "Code": "",
            "ICAO": "GAG"
        },
        {
            "Name": "GTA Air",
            "Code": "",
            "ICAO": "GTX"
        },
        {
            "Name": "Gulf Air",
            "Code": "GF",
            "ICAO": "GFA"
        },
        {
            "Name": "Gulf and Caribbean Cargo",
            "Code": "IF",
            "ICAO": "TSU"
        },
        {
            "Name": "Gulf Wings",
            "Code": "",
            "ICAO": "GWC"
        },
        {
            "Name": "GullivAir",
            "Code": "G2",
            "ICAO": "GBG"
        },
        {
            "Name": "Guna Airlines",
            "Code": "",
            "ICAO": "GUA"
        },
        {
            "Name": "GX Airlines",
            "Code": "GX",
            "ICAO": "CBG"
        },
        {
            "Name": "Hahn Air",
            "Code": "HR",
            "ICAO": "HHN"
        },
        {
            "Name": "Hai Au Aviation",
            "Code": "",
            "ICAO": "HAI"
        },
        {
            "Name": "Hainan Airlines",
            "Code": "HU",
            "ICAO": "CHH"
        },
        {
            "Name": "Hangar 8",
            "Code": "",
            "ICAO": "HGR"
        },
        {
            "Name": "Hans Airways",
            "Code": "",
            "ICAO": "GKS"
        },
        {
            "Name": "Harmony Jets",
            "Code": "",
            "ICAO": "HMJ"
        },
        {
            "Name": "Hawaiian Airlines",
            "Code": "HA",
            "ICAO": "HAL"
        },
        {
            "Name": "Hebei Airlines",
            "Code": "NS",
            "ICAO": "HBH"
        },
        {
            "Name": "Heli Air Monaco",
            "Code": "YO",
            "ICAO": "MCM"
        },
        {
            "Name": "Heli Air Services",
            "Code": "",
            "ICAO": "HLR"
        },
        {
            "Name": "Heli Holland",
            "Code": "",
            "ICAO": "HHE"
        },
        {
            "Name": "Heli Securite",
            "Code": "",
            "ICAO": "HLI"
        },
        {
            "Name": "Heli Service International",
            "Code": "",
            "ICAO": "HSO"
        },
        {
            "Name": "Héli-Union",
            "Code": "",
            "ICAO": "HLU"
        },
        {
            "Name": "Helicol",
            "Code": "",
            "ICAO": "HEL"
        },
        {
            "Name": "Helijet International",
            "Code": "",
            "ICAO": "JBA"
        },
        {
            "Name": "Helistar",
            "Code": "",
            "ICAO": "HTS"
        },
        {
            "Name": "Helistar",
            "Code": "",
            "ICAO": "HSR"
        },
        {
            "Name": "Helitrans",
            "Code": "",
            "ICAO": "HDR"
        },
        {
            "Name": "HELITY Copter Airlines",
            "Code": "",
            "ICAO": "HTY"
        },
        {
            "Name": "Helvetic Airways",
            "Code": "2L",
            "ICAO": "OAW"
        },
        {
            "Name": "Hera Flight",
            "Code": "",
            "ICAO": "HER"
        },
        {
            "Name": "Hermes Airlines",
            "Code": "H3",
            "ICAO": "HRM"
        },
        {
            "Name": "Heron Aviation",
            "Code": "",
            "ICAO": "HRN"
        },
        {
            "Name": "Heston Airlines",
            "Code": "HN",
            "ICAO": "HST"
        },
        {
            "Name": "Hi Air",
            "Code": "4H",
            "ICAO": "HGG"
        },
        {
            "Name": "Hi Fly",
            "Code": "5K",
            "ICAO": "HFY"
        },
        {
            "Name": "Hi Fly Malta",
            "Code": "5M",
            "ICAO": "HFM"
        },
        {
            "Name": "Hibernian Airlines",
            "Code": "HG",
            "ICAO": "HBN"
        },
        {
            "Name": "Himalaya Airlines",
            "Code": "H9",
            "ICAO": "HIM"
        },
        {
            "Name": "Hinterland Aviation",
            "Code": "OI",
            "ICAO": "HND"
        },
        {
            "Name": "HiSky",
            "Code": "H7",
            "ICAO": "HYM"
        },
        {
            "Name": "HiSky Europe",
            "Code": "H4",
            "ICAO": "HYS"
        },
        {
            "Name": "Hokkaido Air System",
            "Code": "",
            "ICAO": "NTH"
        },
        {
            "Name": "Hong Kong Air Cargo",
            "Code": "RH",
            "ICAO": "HKC"
        },
        {
            "Name": "Hong Kong Airlines",
            "Code": "HX",
            "ICAO": "CRK"
        },
        {
            "Name": "Hong Kong Express",
            "Code": "UO",
            "ICAO": "HKE"
        },
        {
            "Name": "Hop-A-Jet",
            "Code": "",
            "ICAO": "HPJ"
        },
        {
            "Name": "Horizon Air",
            "Code": "QX",
            "ICAO": "QXE"
        },
        {
            "Name": "HTM Helicopter Travel Munich",
            "Code": "",
            "ICAO": "HTM"
        },
        {
            "Name": "Hummingbird Aviation",
            "Code": "",
            "ICAO": "ETI"
        },
        {
            "Name": "Hunnu Air",
            "Code": "MR",
            "ICAO": "MML"
        },
        {
            "Name": "Hydro Quebec",
            "Code": "0Q",
            "ICAO": "HYD"
        },
        {
            "Name": "Hyperion Aviation",
            "Code": "",
            "ICAO": "HYP"
        },
        {
            "Name": "I-Fly",
            "Code": "F7",
            "ICAO": "RSY"
        },
        {
            "Name": "iAero Airways",
            "Code": "WQ",
            "ICAO": "SWQ"
        },
        {
            "Name": "IBC Airways",
            "Code": "II",
            "ICAO": "CSQ"
        },
        {
            "Name": "Iberia",
            "Code": "IB",
            "ICAO": "IBE"
        },
        {
            "Name": "Iberia Express",
            "Code": "I2",
            "ICAO": "IBS"
        },
        {
            "Name": "Iberojet",
            "Code": "E9",
            "ICAO": "EVE"
        },
        {
            "Name": "Ibex Airlines",
            "Code": "FW",
            "ICAO": "IBX"
        },
        {
            "Name": "Ibom Air",
            "Code": "QI",
            "ICAO": "IAN"
        },
        {
            "Name": "Icaro",
            "Code": "X8",
            "ICAO": "ICD"
        },
        {
            "Name": "Icelandair",
            "Code": "FI",
            "ICAO": "ICE"
        },
        {
            "Name": "ICS-Aero",
            "Code": "",
            "ICAO": "ICF"
        },
        {
            "Name": "IFL Group",
            "Code": "",
            "ICAO": "IFL"
        },
        {
            "Name": "ImperialJet",
            "Code": "",
            "ICAO": "JTI"
        },
        {
            "Name": "IndiGo",
            "Code": "6E",
            "ICAO": "IGO"
        },
        {
            "Name": "Indonesia AirAsia",
            "Code": "QZ",
            "ICAO": "AWQ"
        },
        {
            "Name": "iNTAIRLINE",
            "Code": "",
            "ICAO": "ITI"
        },
        {
            "Name": "Intel Air Shuttle",
            "Code": "",
            "ICAO": "HGT"
        },
        {
            "Name": "InterCaribbean Airways",
            "Code": "JY",
            "ICAO": "IWY"
        },
        {
            "Name": "InterJet West",
            "Code": "K8",
            "ICAO": "IJW"
        },
        {
            "Name": "International Committee of the Red Cross",
            "Code": "",
            "ICAO": "RED"
        },
        {
            "Name": "International Jet Management",
            "Code": "",
            "ICAO": "IJM"
        },
        {
            "Name": "InterSky",
            "Code": "3L",
            "ICAO": "ISK"
        },
        {
            "Name": "IrAero",
            "Code": "IO",
            "ICAO": "IAE"
        },
        {
            "Name": "Iran Air",
            "Code": "IR",
            "ICAO": "IRA"
        },
        {
            "Name": "Iran Airtour",
            "Code": "B9",
            "ICAO": "IRB"
        },
        {
            "Name": "Iran Aseman Airlines",
            "Code": "EP",
            "ICAO": "IRC"
        },
        {
            "Name": "Iraq Gate Company",
            "Code": "",
            "ICAO": "IGC"
        },
        {
            "Name": "Iraqi Airways",
            "Code": "IA",
            "ICAO": "IAW"
        },
        {
            "Name": "IRS Airlines",
            "Code": "",
            "ICAO": "LVB"
        },
        {
            "Name": "Israir Airlines",
            "Code": "6H",
            "ICAO": "ISR"
        },
        {
            "Name": "ITA Airways",
            "Code": "AZ",
            "ICAO": "ITY"
        },
        {
            "Name": "Italfly",
            "Code": "",
            "ICAO": "ITL"
        },
        {
            "Name": "iXAir",
            "Code": "",
            "ICAO": "IXR"
        },
        {
            "Name": "Izair",
            "Code": "4I",
            "ICAO": "IZM"
        },
        {
            "Name": "Izhavia",
            "Code": "I8",
            "ICAO": "IZA"
        },
        {
            "Name": "JA Air Charter",
            "Code": "",
            "ICAO": "LTD"
        },
        {
            "Name": "JAL Express",
            "Code": "JC",
            "ICAO": "JEX"
        },
        {
            "Name": "Jambojet",
            "Code": "JM",
            "ICAO": "JMA"
        },
        {
            "Name": "Japan Air Commuter",
            "Code": "3X",
            "ICAO": "JAC"
        },
        {
            "Name": "Japan Airlines",
            "Code": "JL",
            "ICAO": "JAL"
        },
        {
            "Name": "Japan Transocean Air",
            "Code": "NU",
            "ICAO": "JTA"
        },
        {
            "Name": "Jasmin Airways",
            "Code": "JO",
            "ICAO": "JAW"
        },
        {
            "Name": "Jazeera Airways",
            "Code": "J9",
            "ICAO": "JZR"
        },
        {
            "Name": "Jazz Aviation",
            "Code": "QK",
            "ICAO": "JZA"
        },
        {
            "Name": "JC Airlines",
            "Code": "QD",
            "ICAO": "JCC"
        },
        {
            "Name": "JC Bamford Excavators",
            "Code": "",
            "ICAO": "JCB"
        },
        {
            "Name": "Jeju Air",
            "Code": "7C",
            "ICAO": "JJA"
        },
        {
            "Name": "Jet Airways",
            "Code": "9W",
            "ICAO": "JAI"
        },
        {
            "Name": "Jet Asia Airways",
            "Code": "JF",
            "ICAO": "JAA"
        },
        {
            "Name": "Jet Aviation Business Jets",
            "Code": "",
            "ICAO": "PJS"
        },
        {
            "Name": "Jet Aviation Flight Services",
            "Code": "",
            "ICAO": "JAS"
        },
        {
            "Name": "Jet Aviation Zurich Airport",
            "Code": "",
            "ICAO": "VCN"
        },
        {
            "Name": "Jet Charter",
            "Code": "N2",
            "ICAO": "JCT"
        },
        {
            "Name": "Jet Edge",
            "Code": "",
            "ICAO": "EDG"
        },
        {
            "Name": "Jet Executive",
            "Code": "",
            "ICAO": "JEI"
        },
        {
            "Name": "Jet Express",
            "Code": "",
            "ICAO": "RFE"
        },
        {
            "Name": "Jet Fly Airline",
            "Code": "",
            "ICAO": "JFL"
        },
        {
            "Name": "Jet It",
            "Code": "",
            "ICAO": "JIT"
        },
        {
            "Name": "Jet Linx Aviation",
            "Code": "",
            "ICAO": "JTL"
        },
        {
            "Name": "Jet Logistics",
            "Code": "",
            "ICAO": "JLG"
        },
        {
            "Name": "Jet Story",
            "Code": "",
            "ICAO": "JDI"
        },
        {
            "Name": "Jet Test International",
            "Code": "",
            "ICAO": "JTN"
        },
        {
            "Name": "Jet2",
            "Code": "LS",
            "ICAO": "EXS"
        },
        {
            "Name": "Jetair Caribbean",
            "Code": "4J",
            "ICAO": "JRC"
        },
        {
            "Name": "Jetalliance East",
            "Code": "",
            "ICAO": "PLS"
        },
        {
            "Name": "Jetbee Czech",
            "Code": "",
            "ICAO": "JBC"
        },
        {
            "Name": "JetBlue Airways",
            "Code": "B6",
            "ICAO": "JBU"
        },
        {
            "Name": "Jetcall",
            "Code": "",
            "ICAO": "JCL"
        },
        {
            "Name": "Jetclub",
            "Code": "0J",
            "ICAO": "JCS"
        },
        {
            "Name": "Jetconnect",
            "Code": "",
            "ICAO": "QNZ"
        },
        {
            "Name": "JetFlite",
            "Code": "",
            "ICAO": "JEF"
        },
        {
            "Name": "Jetfly Aviation",
            "Code": "",
            "ICAO": "JFA"
        },
        {
            "Name": "Jetkontor",
            "Code": "",
            "ICAO": "JKH"
        },
        {
            "Name": "JetLite",
            "Code": "S2",
            "ICAO": "JLL"
        },
        {
            "Name": "JetNetherlands",
            "Code": "",
            "ICAO": "JNL"
        },
        {
            "Name": "JetRight",
            "Code": "",
            "ICAO": "JRT"
        },
        {
            "Name": "JetSMART",
            "Code": "JA",
            "ICAO": "JAT"
        },
        {
            "Name": "JetSMART Argentina",
            "Code": "WJ",
            "ICAO": "JES"
        },
        {
            "Name": "JetSMART Peru",
            "Code": "JZ",
            "ICAO": "JAP"
        },
        {
            "Name": "Jetstar Airways",
            "Code": "JQ",
            "ICAO": "JST"
        },
        {
            "Name": "Jetstar Asia",
            "Code": "3K",
            "ICAO": "JSA"
        },
        {
            "Name": "Jetstar Japan",
            "Code": "GK",
            "ICAO": "JJP"
        },
        {
            "Name": "JetStream",
            "Code": "",
            "ICAO": "JSH"
        },
        {
            "Name": "JetStream Charter",
            "Code": "",
            "ICAO": "VTB"
        },
        {
            "Name": "Jetsuite Air",
            "Code": "",
            "ICAO": "RSP"
        },
        {
            "Name": "Jettime",
            "Code": "",
            "ICAO": "JTD"
        },
        {
            "Name": "Jetways Airlines",
            "Code": "WU",
            "ICAO": "JWX"
        },
        {
            "Name": "Jhonlin Air Transport",
            "Code": "",
            "ICAO": "JLB"
        },
        {
            "Name": "Jiangsu Jingdong Cargo Airlines",
            "Code": "",
            "ICAO": "JDL"
        },
        {
            "Name": "Jiangxi Air",
            "Code": "RY",
            "ICAO": "CJX"
        },
        {
            "Name": "Jin Air",
            "Code": "LJ",
            "ICAO": "JNA"
        },
        {
            "Name": "Jinxiang Airlines",
            "Code": "",
            "ICAO": "JXX"
        },
        {
            "Name": "Jivair",
            "Code": "",
            "ICAO": "JIV"
        },
        {
            "Name": "Jonair",
            "Code": "",
            "ICAO": "JON"
        },
        {
            "Name": "Jonika",
            "Code": "",
            "ICAO": "JNK"
        },
        {
            "Name": "Jordan Aviation",
            "Code": "R5",
            "ICAO": "JAV"
        },
        {
            "Name": "Jordan International Air Cargo",
            "Code": "",
            "ICAO": "JCI"
        },
        {
            "Name": "JoyAir",
            "Code": "JR",
            "ICAO": "JOY"
        },
        {
            "Name": "JSX",
            "Code": "XE",
            "ICAO": "JSX"
        },
        {
            "Name": "Jubba Airways",
            "Code": "JZ",
            "ICAO": "JBW"
        },
        {
            "Name": "Jump Air",
            "Code": "",
            "ICAO": "JUP"
        },
        {
            "Name": "Juneyao Air",
            "Code": "HO",
            "ICAO": "DKH"
        },
        {
            "Name": "Jung Sky",
            "Code": "",
            "ICAO": "JSY"
        },
        {
            "Name": "K-Mile Air",
            "Code": "8K",
            "ICAO": "KMI"
        },
        {
            "Name": "K5-Aviation Germany",
            "Code": "",
            "ICAO": "KAY"
        },
        {
            "Name": "KaiserAir",
            "Code": "",
            "ICAO": "KAI"
        },
        {
            "Name": "Kalitta Air",
            "Code": "K4",
            "ICAO": "CKS"
        },
        {
            "Name": "Kalitta Charters",
            "Code": "K9",
            "ICAO": "KFS"
        },
        {
            "Name": "Kalitta Charters II",
            "Code": "K5",
            "ICAO": "KII"
        },
        {
            "Name": "Kam Air",
            "Code": "RQ",
            "ICAO": "KMF"
        },
        {
            "Name": "Kamaka Air",
            "Code": "",
            "ICAO": "KMK"
        },
        {
            "Name": "Kan Air",
            "Code": "K8",
            "ICAO": "KND"
        },
        {
            "Name": "KAP.kg",
            "Code": "AB",
            "ICAO": "KGS"
        },
        {
            "Name": "Kargo Xpress",
            "Code": "WW",
            "ICAO": "KXP"
        },
        {
            "Name": "Kartika Airlines",
            "Code": "3Y",
            "ICAO": "KAE"
        },
        {
            "Name": "Karun Airlines",
            "Code": "",
            "ICAO": "KRU"
        },
        {
            "Name": "KD Air",
            "Code": "",
            "ICAO": "KDC"
        },
        {
            "Name": "Keewatin Air",
            "Code": "FK",
            "ICAO": "KEW"
        },
        {
            "Name": "Kelowna Flightcraft Air",
            "Code": "FK",
            "ICAO": "KFA"
        },
        {
            "Name": "Kenmore Air",
            "Code": "M5",
            "ICAO": "KEN"
        },
        {
            "Name": "Kenn Borek Air",
            "Code": "4K",
            "ICAO": "KBA"
        },
        {
            "Name": "Kenya Airways",
            "Code": "KQ",
            "ICAO": "KQA"
        },
        {
            "Name": "Key Air",
            "Code": "",
            "ICAO": "KEY"
        },
        {
            "Name": "Key Lime Air",
            "Code": "KG",
            "ICAO": "LYM"
        },
        {
            "Name": "Keystone Air Service",
            "Code": "",
            "ICAO": "KEE"
        },
        {
            "Name": "KhabAvia",
            "Code": "",
            "ICAO": "KHF"
        },
        {
            "Name": "Khors Air",
            "Code": "",
            "ICAO": "KHO"
        },
        {
            "Name": "Kish Air",
            "Code": "",
            "ICAO": "KIS"
        },
        {
            "Name": "KlasJet",
            "Code": "",
            "ICAO": "KLJ"
        },
        {
            "Name": "KLM",
            "Code": "KL",
            "ICAO": "KLM"
        },
        {
            "Name": "KLM Cityhopper",
            "Code": "WA",
            "ICAO": "KLC"
        },
        {
            "Name": "KN Helicopters",
            "Code": "",
            "ICAO": "SHW"
        },
        {
            "Name": "Komiaviatrans",
            "Code": "KO",
            "ICAO": "KMA"
        },
        {
            "Name": "Korean Air",
            "Code": "KE",
            "ICAO": "KAL"
        },
        {
            "Name": "Kosmos Airlines",
            "Code": "",
            "ICAO": "KSM"
        },
        {
            "Name": "Krasavia",
            "Code": "KI",
            "ICAO": "SSJ"
        },
        {
            "Name": "Kudlik Aviation",
            "Code": "",
            "ICAO": "KUK"
        },
        {
            "Name": "Kunming Airlines",
            "Code": "KY",
            "ICAO": "KNA"
        },
        {
            "Name": "Kuwait Airways",
            "Code": "KU",
            "ICAO": "KAC"
        },
        {
            "Name": "La Compagnie",
            "Code": "B0",
            "ICAO": "DJT"
        },
        {
            "Name": "La Costena",
            "Code": "",
            "ICAO": "NIS"
        },
        {
            "Name": "Labcorp",
            "Code": "",
            "ICAO": "SKQ"
        },
        {
            "Name": "LADE",
            "Code": "5U",
            "ICAO": "LDE"
        },
        {
            "Name": "LAM",
            "Code": "TM",
            "ICAO": "LAM"
        },
        {
            "Name": "Lanmei Airlines",
            "Code": "LQ",
            "ICAO": "MKR"
        },
        {
            "Name": "Lao Airlines",
            "Code": "QV",
            "ICAO": "LAO"
        },
        {
            "Name": "Lao Skyway",
            "Code": "LK",
            "ICAO": "LLL"
        },
        {
            "Name": "LAS Cargo",
            "Code": "4L",
            "ICAO": "LAU"
        },
        {
            "Name": "Laser Airlines",
            "Code": "QL",
            "ICAO": "LER"
        },
        {
            "Name": "LATAM Airlines",
            "Code": "LA",
            "ICAO": "LAN"
        },
        {
            "Name": "LATAM Brasil",
            "Code": "JJ",
            "ICAO": "TAM"
        },
        {
            "Name": "LATAM Cargo",
            "Code": "UC",
            "ICAO": "LCO"
        },
        {
            "Name": "LATAM Cargo Brasil",
            "Code": "M3",
            "ICAO": "LTG"
        },
        {
            "Name": "LATAM Cargo Colombia",
            "Code": "L7",
            "ICAO": "LAE"
        },
        {
            "Name": "LATAM Chile",
            "Code": "LU",
            "ICAO": "LXP"
        },
        {
            "Name": "LATAM Colombia",
            "Code": "4C",
            "ICAO": "ARE"
        },
        {
            "Name": "LATAM Ecuador",
            "Code": "XL",
            "ICAO": "LNE"
        },
        {
            "Name": "LATAM Paraguay",
            "Code": "PZ",
            "ICAO": "LAP"
        },
        {
            "Name": "LATAM Peru",
            "Code": "LP",
            "ICAO": "LPE"
        },
        {
            "Name": "Lauda Europe",
            "Code": "LW",
            "ICAO": "LDA"
        },
        {
            "Name": "LC Peru",
            "Code": "W4",
            "ICAO": "LCB"
        },
        {
            "Name": "Leader",
            "Code": "",
            "ICAO": "LSA"
        },
        {
            "Name": "Leav Aviation",
            "Code": "KK",
            "ICAO": "NGN"
        },
        {
            "Name": "Legacy Airways",
            "Code": "",
            "ICAO": "LGF"
        },
        {
            "Name": "Legends Airways",
            "Code": "",
            "ICAO": "DVY"
        },
        {
            "Name": "LIAT",
            "Code": "LI",
            "ICAO": "LIA"
        },
        {
            "Name": "Libyan Airlines",
            "Code": "LN",
            "ICAO": "LAA"
        },
        {
            "Name": "Libyan Wings",
            "Code": "YL",
            "ICAO": "LWA"
        },
        {
            "Name": "Liebherr Aerospace",
            "Code": "",
            "ICAO": "LHB"
        },
        {
            "Name": "Lift Airline",
            "Code": "GE",
            "ICAO": "GBB"
        },
        {
            "Name": "Limitless Airways",
            "Code": "",
            "ICAO": "LIM"
        },
        {
            "Name": "Línea Turística Aereotuy",
            "Code": "",
            "ICAO": "TUY"
        },
        {
            "Name": "Lion Air",
            "Code": "JT",
            "ICAO": "LNI"
        },
        {
            "Name": "Lipican Aer",
            "Code": "",
            "ICAO": "LIP"
        },
        {
            "Name": "LLC H3Operations",
            "Code": "",
            "ICAO": "UHO"
        },
        {
            "Name": "Loganair",
            "Code": "LM",
            "ICAO": "LOG"
        },
        {
            "Name": "LongJiang Airlines",
            "Code": "LT",
            "ICAO": "SNG"
        },
        {
            "Name": "Longtail Aviation",
            "Code": "6T",
            "ICAO": "LGT"
        },
        {
            "Name": "Loong Air",
            "Code": "GJ",
            "ICAO": "CDC"
        },
        {
            "Name": "LOT",
            "Code": "LO",
            "ICAO": "LOT"
        },
        {
            "Name": "Lucky Air",
            "Code": "8L",
            "ICAO": "LKE"
        },
        {
            "Name": "Lufthansa",
            "Code": "LH",
            "ICAO": "DLH"
        },
        {
            "Name": "Lufthansa Cargo",
            "Code": "",
            "ICAO": "GEC"
        },
        {
            "Name": "Lufthansa CityLine",
            "Code": "CL",
            "ICAO": "CLH"
        },
        {
            "Name": "Lufttransport",
            "Code": "",
            "ICAO": "LTR"
        },
        {
            "Name": "Lunds Universitet",
            "Code": "",
            "ICAO": "UNY"
        },
        {
            "Name": "Luxair",
            "Code": "LG",
            "ICAO": "LGL"
        },
        {
            "Name": "Luxaviation",
            "Code": "",
            "ICAO": "LXA"
        },
        {
            "Name": "Luxaviation Belgium",
            "Code": "",
            "ICAO": "AAB"
        },
        {
            "Name": "Luxaviation E.A",
            "Code": "",
            "ICAO": "LMJ"
        },
        {
            "Name": "Luxaviation Germany",
            "Code": "",
            "ICAO": "LXG"
        },
        {
            "Name": "Luxaviation UK",
            "Code": "",
            "ICAO": "LNX"
        },
        {
            "Name": "Luxembourg Air Ambulance",
            "Code": "",
            "ICAO": "LRQ"
        },
        {
            "Name": "Luxwing",
            "Code": "BN",
            "ICAO": "LWG"
        },
        {
            "Name": "Lydd Air",
            "Code": "",
            "ICAO": "LYD"
        },
        {
            "Name": "Lynden Air Cargo",
            "Code": "L2",
            "ICAO": "LYC"
        },
        {
            "Name": "Lynx Air",
            "Code": "Y9",
            "ICAO": "DAT"
        },
        {
            "Name": "MAE Aircraft Management",
            "Code": "MA",
            "ICAO": "MEN"
        },
        {
            "Name": "Maersk Air Cargo",
            "Code": "DJ",
            "ICAO": "SRR"
        },
        {
            "Name": "Magnicharters",
            "Code": "UJ",
            "ICAO": "GMT"
        },
        {
            "Name": "Mahan Air",
            "Code": "W5",
            "ICAO": "IRM"
        },
        {
            "Name": "Makers Air",
            "Code": "",
            "ICAO": "WMA"
        },
        {
            "Name": "Malawian Airlines",
            "Code": "3W",
            "ICAO": "MWI"
        },
        {
            "Name": "Malaysia Airlines",
            "Code": "MH",
            "ICAO": "MAS"
        },
        {
            "Name": "Maldivian",
            "Code": "Q2",
            "ICAO": "DQA"
        },
        {
            "Name": "Maleth-Aero",
            "Code": "DB",
            "ICAO": "MLT"
        },
        {
            "Name": "Mali Air",
            "Code": "",
            "ICAO": "MAE"
        },
        {
            "Name": "Malta Air",
            "Code": "",
            "ICAO": "MAY"
        },
        {
            "Name": "Malta MedAir",
            "Code": "MT",
            "ICAO": "MMO"
        },
        {
            "Name": "Manasik Aviation",
            "Code": "",
            "ICAO": "MNM"
        },
        {
            "Name": "Mandarin Airlines",
            "Code": "AE",
            "ICAO": "MDA"
        },
        {
            "Name": "Mann Yadanarpon Airlines",
            "Code": "7Y",
            "ICAO": "MYP"
        },
        {
            "Name": "Manta Air",
            "Code": "NR",
            "ICAO": "MAV"
        },
        {
            "Name": "Map Linhas Aereas",
            "Code": "7M",
            "ICAO": "PAM"
        },
        {
            "Name": "Marathon Airlines",
            "Code": "",
            "ICAO": "MTO"
        },
        {
            "Name": "Martinair Holland",
            "Code": "MP",
            "ICAO": "MPH"
        },
        {
            "Name": "Martinaire",
            "Code": "",
            "ICAO": "MRA"
        },
        {
            "Name": "MasAir Cargo Airline",
            "Code": "M7",
            "ICAO": "MAA"
        },
        {
            "Name": "MASwings",
            "Code": "MY",
            "ICAO": "MWG"
        },
        {
            "Name": "Mauritania Airlines International",
            "Code": "L6",
            "ICAO": "MAI"
        },
        {
            "Name": "Mavi Gok Aviation",
            "Code": "",
            "ICAO": "MGH"
        },
        {
            "Name": "Max Air",
            "Code": "VM",
            "ICAO": "NGL"
        },
        {
            "Name": "Max Aviation",
            "Code": "",
            "ICAO": "MAX"
        },
        {
            "Name": "Maxair",
            "Code": "",
            "ICAO": "NTW"
        },
        {
            "Name": "Maximus Airlines",
            "Code": "6M",
            "ICAO": "MXM"
        },
        {
            "Name": "Maya Island Air",
            "Code": "2M",
            "ICAO": "MYD"
        },
        {
            "Name": "MAYAir",
            "Code": "7M",
            "ICAO": "MYI"
        },
        {
            "Name": "McCall Aviation",
            "Code": "",
            "ICAO": "MKL"
        },
        {
            "Name": "McNeely Charter Services",
            "Code": "",
            "ICAO": "MDS"
        },
        {
            "Name": "MEA",
            "Code": "ME",
            "ICAO": "MEA"
        },
        {
            "Name": "Med-View Airline",
            "Code": "VL",
            "ICAO": "MEV"
        },
        {
            "Name": "Medavia",
            "Code": "",
            "ICAO": "MDM"
        },
        {
            "Name": "Mel Air",
            "Code": "5M",
            "ICAO": "MDO"
        },
        {
            "Name": "Meraj Airlines",
            "Code": "",
            "ICAO": "MRJ"
        },
        {
            "Name": "Mercury Air Cargo",
            "Code": "4X",
            "ICAO": "MEC"
        },
        {
            "Name": "Meridian",
            "Code": "",
            "ICAO": "MEM"
        },
        {
            "Name": "Meridian Air Company",
            "Code": "",
            "ICAO": "MMM"
        },
        {
            "Name": "Mesa Airlines",
            "Code": "YV",
            "ICAO": "ASH"
        },
        {
            "Name": "MHS Aviation",
            "Code": "M2",
            "ICAO": "MHV"
        },
        {
            "Name": "Miami Air International",
            "Code": "LL",
            "ICAO": "BSK"
        },
        {
            "Name": "Miami Air Lease",
            "Code": "",
            "ICAO": "MGD"
        },
        {
            "Name": "MIAT Mongolian Airlines",
            "Code": "OM",
            "ICAO": "MGL"
        },
        {
            "Name": "Mid Africa Aviation",
            "Code": "",
            "ICAO": "MFG"
        },
        {
            "Name": "Midwest Aviation",
            "Code": "",
            "ICAO": "DZR"
        },
        {
            "Name": "Midwest Aviation Division",
            "Code": "",
            "ICAO": "MWT"
        },
        {
            "Name": "MJet",
            "Code": "",
            "ICAO": "MJF"
        },
        {
            "Name": "MNG Airlines",
            "Code": "MB",
            "ICAO": "MNB"
        },
        {
            "Name": "Moçambique Expresso",
            "Code": "",
            "ICAO": "MXE"
        },
        {
            "Name": "Modern Logistics",
            "Code": "WD",
            "ICAO": "MWM"
        },
        {
            "Name": "Monacair",
            "Code": "QM",
            "ICAO": "MCR"
        },
        {
            "Name": "Morningstar Air Express",
            "Code": "",
            "ICAO": "MAL"
        },
        {
            "Name": "Motor Sich Airlines",
            "Code": "M9",
            "ICAO": "MSI"
        },
        {
            "Name": "Mount Cook Airline",
            "Code": "NM",
            "ICAO": "NZM"
        },
        {
            "Name": "Mountain Air Cargo",
            "Code": "C2",
            "ICAO": "MTN"
        },
        {
            "Name": "Mountain Aviation",
            "Code": "",
            "ICAO": "FTH"
        },
        {
            "Name": "Move",
            "Code": "",
            "ICAO": "MVE"
        },
        {
            "Name": "My Indo Airlines",
            "Code": "2Y",
            "ICAO": "MYU"
        },
        {
            "Name": "My Jet Saver",
            "Code": "",
            "ICAO": "MJS"
        },
        {
            "Name": "MY Jet Xpress Airlines",
            "Code": "N7",
            "ICAO": "NEP"
        },
        {
            "Name": "Myanmar Airways International",
            "Code": "8M",
            "ICAO": "MMA"
        },
        {
            "Name": "Myanmar National Airlines",
            "Code": "UB",
            "ICAO": "UBA"
        },
        {
            "Name": "MyWay Airlines",
            "Code": "MJ",
            "ICAO": "MYW"
        },
        {
            "Name": "Naljets Limited",
            "Code": "",
            "ICAO": "APX"
        },
        {
            "Name": "Nam Air",
            "Code": "IN",
            "ICAO": "LKN"
        },
        {
            "Name": "Nantucket Airlines",
            "Code": "",
            "ICAO": "ACK"
        },
        {
            "Name": "National Air Charters",
            "Code": "JY",
            "ICAO": "JYA"
        },
        {
            "Name": "National Airlines",
            "Code": "N8",
            "ICAO": "NCR"
        },
        {
            "Name": "National Airways",
            "Code": "",
            "ICAO": "NAE"
        },
        {
            "Name": "National Airways Corporation",
            "Code": "",
            "ICAO": "NTN"
        },
        {
            "Name": "National Jet Systems",
            "Code": "",
            "ICAO": "QJE"
        },
        {
            "Name": "Nauru Airlines",
            "Code": "ON",
            "ICAO": "RON"
        },
        {
            "Name": "Naysa",
            "Code": "ZN",
            "ICAO": "NAY"
        },
        {
            "Name": "Neos",
            "Code": "NO",
            "ICAO": "NOS"
        },
        {
            "Name": "Nepal Airlines",
            "Code": "RA",
            "ICAO": "RNA"
        },
        {
            "Name": "Nesma Ailrines Saudi Arabia",
            "Code": "NA",
            "ICAO": "NSS"
        },
        {
            "Name": "Nesma Airlines",
            "Code": "NE",
            "ICAO": "NMA"
        },
        {
            "Name": "NetJets",
            "Code": "1I",
            "ICAO": "EJA"
        },
        {
            "Name": "NetJets Europe",
            "Code": "",
            "ICAO": "NJE"
        },
        {
            "Name": "Netjets UK",
            "Code": "",
            "ICAO": "NJU"
        },
        {
            "Name": "Network Aviation",
            "Code": "",
            "ICAO": "NWK"
        },
        {
            "Name": "New England Airlines",
            "Code": "EJ",
            "ICAO": "NEA"
        },
        {
            "Name": "New England Patriots",
            "Code": "",
            "ICAO": "UDG"
        },
        {
            "Name": "NHC Northern Helicopter",
            "Code": "",
            "ICAO": "NHC"
        },
        {
            "Name": "NHV",
            "Code": "",
            "ICAO": "NHD"
        },
        {
            "Name": "NHV Helicopters",
            "Code": "",
            "ICAO": "NHZ"
        },
        {
            "Name": "Nicholas Air",
            "Code": "",
            "ICAO": "JTZ"
        },
        {
            "Name": "NightExpress",
            "Code": "",
            "ICAO": "EXT"
        },
        {
            "Name": "Nile Air",
            "Code": "NP",
            "ICAO": "NIA"
        },
        {
            "Name": "Nippon Cargo Airlines",
            "Code": "KZ",
            "ICAO": "NCA"
        },
        {
            "Name": "Nok Air",
            "Code": "DD",
            "ICAO": "NOK"
        },
        {
            "Name": "Nolinor Aviation",
            "Code": "N5",
            "ICAO": "NRL"
        },
        {
            "Name": "Nomadic Aviation",
            "Code": "",
            "ICAO": "OMD"
        },
        {
            "Name": "Noordzee Helikopters Vlaanderen",
            "Code": "",
            "ICAO": "NHX"
        },
        {
            "Name": "Nordica",
            "Code": "ND",
            "ICAO": "NDA"
        },
        {
            "Name": "NordStar",
            "Code": "Y7",
            "ICAO": "TYA"
        },
        {
            "Name": "Nordwind Airlines",
            "Code": "N4",
            "ICAO": "NWS"
        },
        {
            "Name": "Norlandair",
            "Code": "",
            "ICAO": "FNA"
        },
        {
            "Name": "NORRA",
            "Code": "N7",
            "ICAO": "FCM"
        },
        {
            "Name": "Norse Atlantic Airways",
            "Code": "N0",
            "ICAO": "NBT"
        },
        {
            "Name": "Norse Atlantic UK",
            "Code": "",
            "ICAO": "UBT"
        },
        {
            "Name": "Norsk Luftambulanse",
            "Code": "",
            "ICAO": "DOC"
        },
        {
            "Name": "North Cariboo Air",
            "Code": "",
            "ICAO": "NCB"
        },
        {
            "Name": "North Central",
            "Code": "",
            "ICAO": "NCJ"
        },
        {
            "Name": "North Flying",
            "Code": "",
            "ICAO": "NFA"
        },
        {
            "Name": "North Pole Parcel Service",
            "Code": "",
            "ICAO": "R3D"
        },
        {
            "Name": "North Star Aviation",
            "Code": "",
            "ICAO": "MVK"
        },
        {
            "Name": "North-West Air Company",
            "Code": "0E",
            "ICAO": "NWC"
        },
        {
            "Name": "North-Western Cargo International Airlines",
            "Code": "CO",
            "ICAO": "CNW"
        },
        {
            "Name": "North-Wright Airways",
            "Code": "HW",
            "ICAO": "NWL"
        },
        {
            "Name": "Northeastern Aviation Corporation",
            "Code": "",
            "ICAO": "NEW"
        },
        {
            "Name": "Northern Air",
            "Code": "",
            "ICAO": "NLI"
        },
        {
            "Name": "Northern Air Cargo",
            "Code": "NC",
            "ICAO": "NAC"
        },
        {
            "Name": "Northern Jet Management",
            "Code": "",
            "ICAO": "NJM"
        },
        {
            "Name": "Northern Thunderbird Air",
            "Code": "",
            "ICAO": "NTA"
        },
        {
            "Name": "Northway Aviation",
            "Code": "",
            "ICAO": "NAL"
        },
        {
            "Name": "Northwest Flyers",
            "Code": "",
            "ICAO": "NWF"
        },
        {
            "Name": "Northwestern Air",
            "Code": "J3",
            "ICAO": "PLR"
        },
        {
            "Name": "Norwegian",
            "Code": "",
            "ICAO": "NAX"
        },
        {
            "Name": "Norwegian Air Shuttle AOC",
            "Code": "DY",
            "ICAO": "NOZ"
        },
        {
            "Name": "Norwegian Air Sweden",
            "Code": "LE",
            "ICAO": "NSW"
        },
        {
            "Name": "Norwegian Air Sweden AOC",
            "Code": "D8",
            "ICAO": "NSZ"
        },
        {
            "Name": "Nouvelair Tunisie",
            "Code": "BJ",
            "ICAO": "LBT"
        },
        {
            "Name": "Nova Airways",
            "Code": "",
            "ICAO": "NOV"
        },
        {
            "Name": "Novair",
            "Code": "NG",
            "ICAO": "NAI"
        },
        {
            "Name": "Novair",
            "Code": "N9",
            "ICAO": "NVR"
        },
        {
            "Name": "NovaJet",
            "Code": "",
            "ICAO": "NOJ"
        },
        {
            "Name": "Novoair",
            "Code": "VQ",
            "ICAO": "NVQ"
        },
        {
            "Name": "Nxt Jet",
            "Code": "",
            "ICAO": "KPO"
        },
        {
            "Name": "Nyxair",
            "Code": "OJ",
            "ICAO": "NYX"
        },
        {
            "Name": "OK Aviation Group",
            "Code": "",
            "ICAO": "NTF"
        },
        {
            "Name": "Okay Airways",
            "Code": "BK",
            "ICAO": "OKA"
        },
        {
            "Name": "Olympic Air",
            "Code": "OA",
            "ICAO": "OAL"
        },
        {
            "Name": "Olympus Airways",
            "Code": "",
            "ICAO": "OLY"
        },
        {
            "Name": "Oman Air",
            "Code": "WY",
            "ICAO": "OMA"
        },
        {
            "Name": "Omni Air International",
            "Code": "OY",
            "ICAO": "OAE"
        },
        {
            "Name": "Omni Air Transport",
            "Code": "",
            "ICAO": "DRL"
        },
        {
            "Name": "Omni Aviation",
            "Code": "",
            "ICAO": "OAV"
        },
        {
            "Name": "Omni Taxi Aereo",
            "Code": "",
            "ICAO": "OMI"
        },
        {
            "Name": "One Air",
            "Code": "",
            "ICAO": "HGO"
        },
        {
            "Name": "One Airways",
            "Code": "OX",
            "ICAO": "OEW"
        },
        {
            "Name": "Open Skies",
            "Code": "LV",
            "ICAO": "BOS"
        },
        {
            "Name": "Orbest",
            "Code": "6O",
            "ICAO": "OBS"
        },
        {
            "Name": "Orenburzhye",
            "Code": "O7",
            "ICAO": "ORG"
        },
        {
            "Name": "Oriental Air Bridge",
            "Code": "OC",
            "ICAO": "ORC"
        },
        {
            "Name": "Origin Air",
            "Code": "OG",
            "ICAO": "OGN"
        },
        {
            "Name": "Ornge Air",
            "Code": "",
            "ICAO": "PUL"
        },
        {
            "Name": "Oscar Jet",
            "Code": "",
            "ICAO": "OSJ"
        },
        {
            "Name": "OSM Aviation Academy",
            "Code": "",
            "ICAO": "SCQ"
        },
        {
            "Name": "OTT Airlines",
            "Code": "JF",
            "ICAO": "OTT"
        },
        {
            "Name": "Overland Airways",
            "Code": "OF",
            "ICAO": "OLA"
        },
        {
            "Name": "Oxford Aviation Academy",
            "Code": "",
            "ICAO": "OXF"
        },
        {
            "Name": "Oyonnair",
            "Code": "",
            "ICAO": "OYO"
        },
        {
            "Name": "Paccair",
            "Code": "",
            "ICAO": "WIS"
        },
        {
            "Name": "Pacific Airline",
            "Code": "BL",
            "ICAO": "PIC"
        },
        {
            "Name": "Pacific Coast Jet",
            "Code": "",
            "ICAO": "PXT"
        },
        {
            "Name": "Pacific Coastal Airlines",
            "Code": "8P",
            "ICAO": "PCO"
        },
        {
            "Name": "PADAviation",
            "Code": "",
            "ICAO": "PVD"
        },
        {
            "Name": "Pakistan International Airlines",
            "Code": "PK",
            "ICAO": "PIA"
        },
        {
            "Name": "PAL Airlines",
            "Code": "PB",
            "ICAO": "PVL"
        },
        {
            "Name": "PAL Express",
            "Code": "2P",
            "ICAO": "GAP"
        },
        {
            "Name": "Palau Express Airlines",
            "Code": "P9",
            "ICAO": "PXC"
        },
        {
            "Name": "Palau National Airlines",
            "Code": "4L",
            "ICAO": "PNA"
        },
        {
            "Name": "Pan American Airways",
            "Code": "PN",
            "ICAO": "PAA"
        },
        {
            "Name": "Pan Europeenne Air Service",
            "Code": "",
            "ICAO": "PEA"
        },
        {
            "Name": "Pan Pacific Airlines",
            "Code": "8Y",
            "ICAO": "AAV"
        },
        {
            "Name": "Panaviatic",
            "Code": "",
            "ICAO": "VPC"
        },
        {
            "Name": "Panellenic Airlines",
            "Code": "",
            "ICAO": "RJB"
        },
        {
            "Name": "Panorama Aviation",
            "Code": "",
            "ICAO": "PNO"
        },
        {
            "Name": "Paranair",
            "Code": "ZP",
            "ICAO": "AZP"
        },
        {
            "Name": "Pascan Aviation",
            "Code": "P6",
            "ICAO": "PSC"
        },
        {
            "Name": "PassionAir",
            "Code": "OP",
            "ICAO": "DIG"
        },
        {
            "Name": "Patient Airlift Services",
            "Code": "",
            "ICAO": "PLZ"
        },
        {
            "Name": "Patria Pilot Training",
            "Code": "",
            "ICAO": "PPT"
        },
        {
            "Name": "PAWA Dominicana",
            "Code": "7N",
            "ICAO": "PWD"
        },
        {
            "Name": "Peach",
            "Code": "MM",
            "ICAO": "APJ"
        },
        {
            "Name": "Pegas Fly",
            "Code": "EO",
            "ICAO": "KAR"
        },
        {
            "Name": "Pegasus Airlines",
            "Code": "PC",
            "ICAO": "PGT"
        },
        {
            "Name": "Pegasus Elite Aviation",
            "Code": "",
            "ICAO": "PEG"
        },
        {
            "Name": "Pel-Air",
            "Code": "",
            "ICAO": "PFY"
        },
        {
            "Name": "Pelita Air",
            "Code": "IP",
            "ICAO": "PAS"
        },
        {
            "Name": "People's",
            "Code": "PE",
            "ICAO": "PEV"
        },
        {
            "Name": "Perimeter Aviation",
            "Code": "YP",
            "ICAO": "PAG"
        },
        {
            "Name": "Petroleum Air Service",
            "Code": "UF",
            "ICAO": "PER"
        },
        {
            "Name": "Petropavlovsk-Kamchatsky Air",
            "Code": "",
            "ICAO": "PTK"
        },
        {
            "Name": "PHI",
            "Code": "",
            "ICAO": "PHM"
        },
        {
            "Name": "Philippine Airlines",
            "Code": "PR",
            "ICAO": "PAL"
        },
        {
            "Name": "Philippines AirAsia",
            "Code": "Z2",
            "ICAO": "APG"
        },
        {
            "Name": "Phoenix Air",
            "Code": "PH",
            "ICAO": "GRB"
        },
        {
            "Name": "Piedmont Airlines",
            "Code": "PT",
            "ICAO": "PDT"
        },
        {
            "Name": "Pilatus Flugzeugwerke",
            "Code": "",
            "ICAO": "PCH"
        },
        {
            "Name": "Pilot Flight Academy",
            "Code": "",
            "ICAO": "PIP"
        },
        {
            "Name": "Pineapple Air",
            "Code": "",
            "ICAO": "PNP"
        },
        {
            "Name": "Pink Sparrow",
            "Code": "",
            "ICAO": "SOW"
        },
        {
            "Name": "Pionair Australia",
            "Code": "",
            "ICAO": "SFZ"
        },
        {
            "Name": "Pivot Airlines",
            "Code": "ZX",
            "ICAO": "GGN"
        },
        {
            "Name": "PixAir Survey",
            "Code": "",
            "ICAO": "PXR"
        },
        {
            "Name": "Planemaster Services",
            "Code": "",
            "ICAO": "PMS"
        },
        {
            "Name": "PlaneSense",
            "Code": "",
            "ICAO": "CNS"
        },
        {
            "Name": "Play",
            "Code": "OG",
            "ICAO": "FPY"
        },
        {
            "Name": "Plus Ultra",
            "Code": "PU",
            "ICAO": "PUE"
        },
        {
            "Name": "PNG Air",
            "Code": "CG",
            "ICAO": "TOK"
        },
        {
            "Name": "Pobeda",
            "Code": "DP",
            "ICAO": "PBD"
        },
        {
            "Name": "Polar Air Cargo",
            "Code": "PO",
            "ICAO": "PAC"
        },
        {
            "Name": "Polar Airlines",
            "Code": "PI",
            "ICAO": "RKA"
        },
        {
            "Name": "Polish Medical Air Rescue",
            "Code": "",
            "ICAO": "LPR"
        },
        {
            "Name": "Porter Airlines",
            "Code": "PD",
            "ICAO": "POE"
        },
        {
            "Name": "Portugalia Airlines",
            "Code": "NI",
            "ICAO": "PGA"
        },
        {
            "Name": "Poste Air Cargo",
            "Code": "M4",
            "ICAO": "MSA"
        },
        {
            "Name": "Pratt and Whitney",
            "Code": "",
            "ICAO": "PWC"
        },
        {
            "Name": "Precision Air",
            "Code": "PW",
            "ICAO": "PRF"
        },
        {
            "Name": "Premier Private Jets",
            "Code": "",
            "ICAO": "MVP"
        },
        {
            "Name": "Presidential Aviation",
            "Code": "",
            "ICAO": "PRD"
        },
        {
            "Name": "Priester Aviation",
            "Code": "",
            "ICAO": "PWA"
        },
        {
            "Name": "Prime Aviation",
            "Code": "",
            "ICAO": "PRZ"
        },
        {
            "Name": "Prince Aviation",
            "Code": "",
            "ICAO": "PNC"
        },
        {
            "Name": "Priority Air Charter",
            "Code": "",
            "ICAO": "PRY"
        },
        {
            "Name": "Privaira",
            "Code": "",
            "ICAO": "PVO"
        },
        {
            "Name": "Private Jets",
            "Code": "",
            "ICAO": "OKC"
        },
        {
            "Name": "Private Wings",
            "Code": "8W",
            "ICAO": "PWF"
        },
        {
            "Name": "Privilege Style",
            "Code": "P6",
            "ICAO": "PVG"
        },
        {
            "Name": "ProAir Aviation",
            "Code": "",
            "ICAO": "PAV"
        },
        {
            "Name": "Proflight Air Services",
            "Code": "P0",
            "ICAO": "PFZ"
        },
        {
            "Name": "Propair",
            "Code": "",
            "ICAO": "PRO"
        },
        {
            "Name": "PSA Airlines",
            "Code": "OH",
            "ICAO": "JIA"
        },
        {
            "Name": "QA Aviation",
            "Code": "",
            "ICAO": "QAV"
        },
        {
            "Name": "Qanot Sharq",
            "Code": "HH",
            "ICAO": "QNT"
        },
        {
            "Name": "Qantas",
            "Code": "QF",
            "ICAO": "QFA"
        },
        {
            "Name": "QantasLink",
            "Code": "",
            "ICAO": "QLK"
        },
        {
            "Name": "Qatar - Amiri Flight",
            "Code": "",
            "ICAO": "QAF"
        },
        {
            "Name": "Qatar Airways",
            "Code": "QR",
            "ICAO": "QTR"
        },
        {
            "Name": "Qatar Executive",
            "Code": "QE",
            "ICAO": "QQE"
        },
        {
            "Name": "Qazaq Air",
            "Code": "IQ",
            "ICAO": "QAZ"
        },
        {
            "Name": "Qeshm Airlines",
            "Code": "QB",
            "ICAO": "QSM"
        },
        {
            "Name": "Qingdao Airlines",
            "Code": "QW",
            "ICAO": "QDA"
        },
        {
            "Name": "Qingdao Jiutian International Flight Academy",
            "Code": "",
            "ICAO": "QJT"
        },
        {
            "Name": "Quest Diagnostics",
            "Code": "",
            "ICAO": "LBQ"
        },
        {
            "Name": "Quick Air Jet Charter",
            "Code": "",
            "ICAO": "QAJ"
        },
        {
            "Name": "Quikjet Cargo Airlines",
            "Code": "QO",
            "ICAO": "FQA"
        },
        {
            "Name": "RAF-Avia",
            "Code": "MT",
            "ICAO": "MTL"
        },
        {
            "Name": "RAM Express",
            "Code": "",
            "ICAO": "RXP"
        },
        {
            "Name": "Ravenair",
            "Code": "",
            "ICAO": "RVR"
        },
        {
            "Name": "Ravn Alaska",
            "Code": "7H",
            "ICAO": "RVF"
        },
        {
            "Name": "Raya Airways",
            "Code": "TH",
            "ICAO": "RMY"
        },
        {
            "Name": "Rayani Air",
            "Code": "RN",
            "ICAO": "RKT"
        },
        {
            "Name": "Reach Air Medical Services",
            "Code": "",
            "ICAO": "REH"
        },
        {
            "Name": "Real Tonga Airline",
            "Code": "",
            "ICAO": "RLT"
        },
        {
            "Name": "Rectrix Aviation",
            "Code": "",
            "ICAO": "RIX"
        },
        {
            "Name": "Red Air",
            "Code": "L5",
            "ICAO": "REA"
        },
        {
            "Name": "Red Wing Aviation",
            "Code": "",
            "ICAO": "LAK"
        },
        {
            "Name": "Red Wings",
            "Code": "WZ",
            "ICAO": "RWZ"
        },
        {
            "Name": "Redding Aero Enterprises",
            "Code": "",
            "ICAO": "BXR"
        },
        {
            "Name": "Redstar Aviation",
            "Code": "",
            "ICAO": "RHH"
        },
        {
            "Name": "Regent Airways",
            "Code": "RX",
            "ICAO": "RGE"
        },
        {
            "Name": "Regional",
            "Code": "YS",
            "ICAO": "RAE"
        },
        {
            "Name": "Regional Air Services",
            "Code": "8N",
            "ICAO": "REG"
        },
        {
            "Name": "Rennia Aviation",
            "Code": "",
            "ICAO": "RNI"
        },
        {
            "Name": "Republic Airways",
            "Code": "YX",
            "ICAO": "RPA"
        },
        {
            "Name": "Rex",
            "Code": "ZL",
            "ICAO": "RXA"
        },
        {
            "Name": "Rhoades Aviation",
            "Code": "T4",
            "ICAO": "RDS"
        },
        {
            "Name": "Richland Aviation",
            "Code": "",
            "ICAO": "RCA"
        },
        {
            "Name": "Rimbun Air",
            "Code": "RI",
            "ICAO": "OEY"
        },
        {
            "Name": "Rise Air",
            "Code": "4T",
            "ICAO": "WEW"
        },
        {
            "Name": "ROMCargo Airlines",
            "Code": "NJ",
            "ICAO": "RCR"
        },
        {
            "Name": "Roraima Airways",
            "Code": "",
            "ICAO": "ROM"
        },
        {
            "Name": "Rose Air",
            "Code": "",
            "ICAO": "REM"
        },
        {
            "Name": "Rossiya",
            "Code": "FV",
            "ICAO": "SDM"
        },
        {
            "Name": "Rossiya - Special Flight Squadron",
            "Code": "",
            "ICAO": "RSD"
        },
        {
            "Name": "Rotana Jet",
            "Code": "RG",
            "ICAO": "RJD"
        },
        {
            "Name": "Royal Air Freight",
            "Code": "",
            "ICAO": "RAX"
        },
        {
            "Name": "Royal Air Maroc",
            "Code": "AT",
            "ICAO": "RAM"
        },
        {
            "Name": "Royal Brunei Airlines",
            "Code": "BI",
            "ICAO": "RBA"
        },
        {
            "Name": "Royal Falcon",
            "Code": "",
            "ICAO": "RFJ"
        },
        {
            "Name": "Royal Jordanian",
            "Code": "RJ",
            "ICAO": "RJA"
        },
        {
            "Name": "Royal Wings",
            "Code": "JO",
            "ICAO": "RYW"
        },
        {
            "Name": "Royalair Philippines",
            "Code": "RW",
            "ICAO": "RYL"
        },
        {
            "Name": "Rubystar",
            "Code": "",
            "ICAO": "RSB"
        },
        {
            "Name": "Ruili Airlines",
            "Code": "DR",
            "ICAO": "RLH"
        },
        {
            "Name": "RUS Aviation",
            "Code": "R4",
            "ICAO": "RLB"
        },
        {
            "Name": "Rusline",
            "Code": "7R",
            "ICAO": "RLU"
        },
        {
            "Name": "Russia - Ministry of Emergency Situations (MChS)",
            "Code": "",
            "ICAO": "SUM"
        },
        {
            "Name": "Rutaca Airlines",
            "Code": "5R",
            "ICAO": "RUC"
        },
        {
            "Name": "RVL Aviation",
            "Code": "",
            "ICAO": "REV"
        },
        {
            "Name": "RwandAir",
            "Code": "WB",
            "ICAO": "RWD"
        },
        {
            "Name": "RWL German Flight Academy",
            "Code": "",
            "ICAO": "RWL"
        },
        {
            "Name": "Ryan Air (USA)",
            "Code": "7S",
            "ICAO": "RYA"
        },
        {
            "Name": "Ryanair",
            "Code": "FR",
            "ICAO": "RYR"
        },
        {
            "Name": "Ryanair UK",
            "Code": "RK",
            "ICAO": "RUK"
        },
        {
            "Name": "Ryukyu Air Commuter",
            "Code": "",
            "ICAO": "RAC"
        },
        {
            "Name": "S7 Airlines",
            "Code": "S7",
            "ICAO": "SBI"
        },
        {
            "Name": "SA Express",
            "Code": "XZ",
            "ICAO": "EXY"
        },
        {
            "Name": "SAAB Aircraft",
            "Code": "",
            "ICAO": "SCT"
        },
        {
            "Name": "SAAB Nyge Aero",
            "Code": "",
            "ICAO": "TGT"
        },
        {
            "Name": "SAF Helicopteres",
            "Code": "",
            "ICAO": "SHP"
        },
        {
            "Name": "Safarilink Aviation",
            "Code": "F2",
            "ICAO": "XLK"
        },
        {
            "Name": "Safi Airways",
            "Code": "4Q",
            "ICAO": "SFW"
        },
        {
            "Name": "Saha Airlines",
            "Code": "",
            "ICAO": "IRZ"
        },
        {
            "Name": "Sahel Aviation Service",
            "Code": "",
            "ICAO": "SAO"
        },
        {
            "Name": "SalamAir",
            "Code": "OV",
            "ICAO": "OMS"
        },
        {
            "Name": "Salzburg Jet Aviation",
            "Code": "",
            "ICAO": "MOZ"
        },
        {
            "Name": "Samoa Airways",
            "Code": "OL",
            "ICAO": "PAO"
        },
        {
            "Name": "San Marino Executive Aviation",
            "Code": "",
            "ICAO": "SMF"
        },
        {
            "Name": "Sansa",
            "Code": "",
            "ICAO": "LRS"
        },
        {
            "Name": "Sapsan Airline",
            "Code": "",
            "ICAO": "KGB"
        },
        {
            "Name": "Sardinian Sky Service",
            "Code": "",
            "ICAO": "SSR"
        },
        {
            "Name": "SAS",
            "Code": "SK",
            "ICAO": "SAS"
        },
        {
            "Name": "SAS Connect",
            "Code": "SL",
            "ICAO": "SZS"
        },
        {
            "Name": "SAS Link",
            "Code": "",
            "ICAO": "SVS"
        },
        {
            "Name": "SATA Air Acores",
            "Code": "SP",
            "ICAO": "SAT"
        },
        {
            "Name": "Satena",
            "Code": "9R",
            "ICAO": "NSE"
        },
        {
            "Name": "Saudia",
            "Code": "SV",
            "ICAO": "SVA"
        },
        {
            "Name": "Saurya Airlines",
            "Code": "",
            "ICAO": "SAU"
        },
        {
            "Name": "Sawyer Aviation",
            "Code": "",
            "ICAO": "SJA"
        },
        {
            "Name": "SaxonAir",
            "Code": "",
            "ICAO": "SXN"
        },
        {
            "Name": "SBA Airlines",
            "Code": "S3",
            "ICAO": "BBR"
        },
        {
            "Name": "Scanwings",
            "Code": "",
            "ICAO": "ABF"
        },
        {
            "Name": "SCAT",
            "Code": "DV",
            "ICAO": "VSV"
        },
        {
            "Name": "Scoot",
            "Code": "TR",
            "ICAO": "TGW"
        },
        {
            "Name": "Seaborne",
            "Code": "BB",
            "ICAO": "SBS"
        },
        {
            "Name": "SeaPort Airlines",
            "Code": "K5",
            "ICAO": "SQH"
        },
        {
            "Name": "Searca",
            "Code": "",
            "ICAO": "SRC"
        },
        {
            "Name": "Secure Air Charter",
            "Code": "",
            "ICAO": "JCM"
        },
        {
            "Name": "Sepehran Airlines",
            "Code": "IS",
            "ICAO": "SHI"
        },
        {
            "Name": "Serene Air",
            "Code": "ER",
            "ICAO": "SEP"
        },
        {
            "Name": "Servizi Aerei",
            "Code": "",
            "ICAO": "SNM"
        },
        {
            "Name": "Sevenair",
            "Code": "",
            "ICAO": "RVP"
        },
        {
            "Name": "Severstal Aircompany",
            "Code": "D2",
            "ICAO": "SSF"
        },
        {
            "Name": "SF Airlines",
            "Code": "O3",
            "ICAO": "CSS"
        },
        {
            "Name": "Shandong Airlines",
            "Code": "SC",
            "ICAO": "CDG"
        },
        {
            "Name": "Shanghai Airlines",
            "Code": "FM",
            "ICAO": "CSH"
        },
        {
            "Name": "Shenzhen Airlines",
            "Code": "ZH",
            "ICAO": "CSZ"
        },
        {
            "Name": "Shirak Avia",
            "Code": "",
            "ICAO": "SHS"
        },
        {
            "Name": "Shovkoviy Shlyah",
            "Code": "S8",
            "ICAO": "SWW"
        },
        {
            "Name": "Shree Airlines",
            "Code": "N9",
            "ICAO": "SHA"
        },
        {
            "Name": "Shuttle America",
            "Code": "S5",
            "ICAO": "TCF"
        },
        {
            "Name": "Siam General Aviation",
            "Code": "5E",
            "ICAO": "SGN"
        },
        {
            "Name": "Sichuan Airlines",
            "Code": "3U",
            "ICAO": "CSC"
        },
        {
            "Name": "Sideral Linhas Aereas",
            "Code": "",
            "ICAO": "SID"
        },
        {
            "Name": "Sierra West Airlines",
            "Code": "P8",
            "ICAO": "PKW"
        },
        {
            "Name": "Silesia Air",
            "Code": "",
            "ICAO": "SUA"
        },
        {
            "Name": "Silk Way Airlines",
            "Code": "ZP",
            "ICAO": "AZQ"
        },
        {
            "Name": "Silk Way West Airlines",
            "Code": "7L",
            "ICAO": "AZG"
        },
        {
            "Name": "Silver Air",
            "Code": "",
            "ICAO": "SIS"
        },
        {
            "Name": "Silver Air",
            "Code": "",
            "ICAO": "SLD"
        },
        {
            "Name": "Silver Airways",
            "Code": "3M",
            "ICAO": "SIL"
        },
        {
            "Name": "Silver Cloud Air",
            "Code": "",
            "ICAO": "SCR"
        },
        {
            "Name": "Silverhawk Aviation",
            "Code": "",
            "ICAO": "SLH"
        },
        {
            "Name": "Silverstone Air Services",
            "Code": "",
            "ICAO": "SLR"
        },
        {
            "Name": "Simrik Airlines",
            "Code": "",
            "ICAO": "RMK"
        },
        {
            "Name": "Singapore Airlines",
            "Code": "SQ",
            "ICAO": "SIA"
        },
        {
            "Name": "Singapore Airlines Cargo",
            "Code": "",
            "ICAO": "SQC"
        },
        {
            "Name": "Sino Jet",
            "Code": "",
            "ICAO": "SJM"
        },
        {
            "Name": "Sino Jet Beijing",
            "Code": "",
            "ICAO": "JBE"
        },
        {
            "Name": "Sirio",
            "Code": "",
            "ICAO": "SIO"
        },
        {
            "Name": "Sirius Aero",
            "Code": "SA",
            "ICAO": "CIG"
        },
        {
            "Name": "SKS Airways",
            "Code": "KI",
            "ICAO": "SJB"
        },
        {
            "Name": "Sky Airline",
            "Code": "H2",
            "ICAO": "SKU"
        },
        {
            "Name": "Sky Airline Peru",
            "Code": "H8",
            "ICAO": "SKX"
        },
        {
            "Name": "Sky Angkor Airlines",
            "Code": "ZA",
            "ICAO": "SWM"
        },
        {
            "Name": "Sky Bus",
            "Code": "",
            "ICAO": "HVY"
        },
        {
            "Name": "Sky Cana",
            "Code": "RD",
            "ICAO": "SNA"
        },
        {
            "Name": "Sky Express",
            "Code": "GQ",
            "ICAO": "SEH"
        },
        {
            "Name": "Sky Gates Airlines",
            "Code": "U3",
            "ICAO": "SAY"
        },
        {
            "Name": "Sky High Aviation Services",
            "Code": "DO",
            "ICAO": "SHH"
        },
        {
            "Name": "Sky KG Airlines",
            "Code": "",
            "ICAO": "KGK"
        },
        {
            "Name": "Sky Lease Cargo",
            "Code": "GG",
            "ICAO": "KYE"
        },
        {
            "Name": "Sky Mali",
            "Code": "ML",
            "ICAO": "FML"
        },
        {
            "Name": "Sky Prime Aviation",
            "Code": "UY",
            "ICAO": "SPD"
        },
        {
            "Name": "Sky Quest",
            "Code": "",
            "ICAO": "ERY"
        },
        {
            "Name": "Skyborne Airline Academy",
            "Code": "",
            "ICAO": "SFY"
        },
        {
            "Name": "Skybridge",
            "Code": "",
            "ICAO": "KYB"
        },
        {
            "Name": "Skybus",
            "Code": "",
            "ICAO": "IOS"
        },
        {
            "Name": "Skyfirst",
            "Code": "",
            "ICAO": "KFE"
        },
        {
            "Name": "SkyJet Airlines",
            "Code": "M8",
            "ICAO": "MSJ"
        },
        {
            "Name": "SkyLink Express",
            "Code": "",
            "ICAO": "SLQ"
        },
        {
            "Name": "Skymark Airlines",
            "Code": "BC",
            "ICAO": "SKY"
        },
        {
            "Name": "Skyservice Business Aviation",
            "Code": "",
            "ICAO": "SYB"
        },
        {
            "Name": "Skytaxi",
            "Code": "TE",
            "ICAO": "IGA"
        },
        {
            "Name": "Skytrans",
            "Code": "QN",
            "ICAO": "SKP"
        },
        {
            "Name": "SkyUp Airlines",
            "Code": "PQ",
            "ICAO": "SQP"
        },
        {
            "Name": "Skyvalue Airways",
            "Code": "4A",
            "ICAO": "DYN"
        },
        {
            "Name": "Skyward Express",
            "Code": "OW",
            "ICAO": "SEW"
        },
        {
            "Name": "Skyway Enterprises",
            "Code": "",
            "ICAO": "SKZ"
        },
        {
            "Name": "SkyWest Airlines",
            "Code": "OO",
            "ICAO": "SKW"
        },
        {
            "Name": "Slam Lavori Aerei",
            "Code": "",
            "ICAO": "SLJ"
        },
        {
            "Name": "Sloane Helicopters",
            "Code": "",
            "ICAO": "SLN"
        },
        {
            "Name": "Smart Aviation",
            "Code": "",
            "ICAO": "SME"
        },
        {
            "Name": "Smart Jet",
            "Code": "",
            "ICAO": "SAH"
        },
        {
            "Name": "Smartavia",
            "Code": "5N",
            "ICAO": "AUL"
        },
        {
            "Name": "Smartline",
            "Code": "",
            "ICAO": "SMG"
        },
        {
            "Name": "SmartLynx",
            "Code": "6Y",
            "ICAO": "ART"
        },
        {
            "Name": "SmartLynx Airlines Estonia",
            "Code": "",
            "ICAO": "MYX"
        },
        {
            "Name": "SmartLynx Malta",
            "Code": "",
            "ICAO": "LYX"
        },
        {
            "Name": "Smartwings",
            "Code": "QS",
            "ICAO": "TVS"
        },
        {
            "Name": "Smartwings Hungary",
            "Code": "7O",
            "ICAO": "TVL"
        },
        {
            "Name": "Smartwings Poland",
            "Code": "3Z",
            "ICAO": "TVP"
        },
        {
            "Name": "Smartwings Slovakia",
            "Code": "6D",
            "ICAO": "TVQ"
        },
        {
            "Name": "Solairus Aviation",
            "Code": "",
            "ICAO": "TWY"
        },
        {
            "Name": "Solaseed Air",
            "Code": "6J",
            "ICAO": "SNJ"
        },
        {
            "Name": "Solenta Aviation",
            "Code": "",
            "ICAO": "SET"
        },
        {
            "Name": "Solid Air",
            "Code": "",
            "ICAO": "SOX"
        },
        {
            "Name": "Solinair",
            "Code": "SP",
            "ICAO": "SOP"
        },
        {
            "Name": "Solomon Airlines",
            "Code": "IE",
            "ICAO": "SOL"
        },
        {
            "Name": "Somon Air",
            "Code": "SZ",
            "ICAO": "SMR"
        },
        {
            "Name": "Songbird Airways",
            "Code": "6K",
            "ICAO": "SGB"
        },
        {
            "Name": "Sounds Air",
            "Code": "S8",
            "ICAO": "SDA"
        },
        {
            "Name": "South African Airways",
            "Code": "SA",
            "ICAO": "SAA"
        },
        {
            "Name": "Southern Air Charter",
            "Code": "PL",
            "ICAO": "SOA"
        },
        {
            "Name": "Southern Airways Express",
            "Code": "9X",
            "ICAO": "FDY"
        },
        {
            "Name": "Southern Cross International",
            "Code": "",
            "ICAO": "SXI"
        },
        {
            "Name": "Southwest Airlines",
            "Code": "WN",
            "ICAO": "SWA"
        },
        {
            "Name": "Sparfell Luftfahrt",
            "Code": "",
            "ICAO": "LDX"
        },
        {
            "Name": "Speedwings Executive Jet",
            "Code": "",
            "ICAO": "SPG"
        },
        {
            "Name": "SpiceJet",
            "Code": "SG",
            "ICAO": "SEJ"
        },
        {
            "Name": "Spirit Airlines",
            "Code": "NK",
            "ICAO": "NKS"
        },
        {
            "Name": "SpiritJets",
            "Code": "",
            "ICAO": "SJJ"
        },
        {
            "Name": "Spring Airlines",
            "Code": "9C",
            "ICAO": "CQH"
        },
        {
            "Name": "Spring Japan",
            "Code": "IJ",
            "ICAO": "SJO"
        },
        {
            "Name": "SprintAir",
            "Code": "P8",
            "ICAO": "SRN"
        },
        {
            "Name": "SriLankan Airlines",
            "Code": "UL",
            "ICAO": "ALK"
        },
        {
            "Name": "Sriwijaya Air",
            "Code": "SJ",
            "ICAO": "SJY"
        },
        {
            "Name": "St Barth Commuter",
            "Code": "PV",
            "ICAO": "SBU"
        },
        {
            "Name": "St Barth Executive",
            "Code": "",
            "ICAO": "STB"
        },
        {
            "Name": "STAjets",
            "Code": "",
            "ICAO": "KFB"
        },
        {
            "Name": "Star Air",
            "Code": "S5",
            "ICAO": "SDG"
        },
        {
            "Name": "Star Air Cargo",
            "Code": "",
            "ICAO": "BRH"
        },
        {
            "Name": "Star East Airlines",
            "Code": "4R",
            "ICAO": "SEK"
        },
        {
            "Name": "Star Peru",
            "Code": "2I",
            "ICAO": "SRU"
        },
        {
            "Name": "Star Wings",
            "Code": "",
            "ICAO": "STQ"
        },
        {
            "Name": "Star Work Sky",
            "Code": "",
            "ICAO": "SWP"
        },
        {
            "Name": "Starflyer",
            "Code": "7G",
            "ICAO": "SFJ"
        },
        {
            "Name": "Starlight Airlines",
            "Code": "QP",
            "ICAO": "SLT"
        },
        {
            "Name": "Starlink Aviation",
            "Code": "Q4",
            "ICAO": "TLK"
        },
        {
            "Name": "Starlux",
            "Code": "JX",
            "ICAO": "SJX"
        },
        {
            "Name": "Sterling Aviation",
            "Code": "",
            "ICAO": "NSH"
        },
        {
            "Name": "STP Airways",
            "Code": "8F",
            "ICAO": "STP"
        },
        {
            "Name": "Suburban Air Freight",
            "Code": "",
            "ICAO": "SUB"
        },
        {
            "Name": "Sudan Airways",
            "Code": "SD",
            "ICAO": "SUD"
        },
        {
            "Name": "Summit Air",
            "Code": "",
            "ICAO": "SUT"
        },
        {
            "Name": "Sun Air",
            "Code": "1Y",
            "ICAO": "SNR"
        },
        {
            "Name": "Sun Country Airlines",
            "Code": "SY",
            "ICAO": "SCX"
        },
        {
            "Name": "Sun-Air",
            "Code": "EZ",
            "ICAO": "SUS"
        },
        {
            "Name": "Sunair Aviation",
            "Code": "ZU",
            "ICAO": "SAV"
        },
        {
            "Name": "Sunclass Airlines",
            "Code": "DK",
            "ICAO": "VKG"
        },
        {
            "Name": "Suncor Energy",
            "Code": "",
            "ICAO": "JSN"
        },
        {
            "Name": "Sundair",
            "Code": "SR",
            "ICAO": "SDR"
        },
        {
            "Name": "Sundance Air Venezuela",
            "Code": "R8",
            "ICAO": "SUV"
        },
        {
            "Name": "Sundt Air",
            "Code": "",
            "ICAO": "AKK"
        },
        {
            "Name": "Sundt Air",
            "Code": "",
            "ICAO": "MDT"
        },
        {
            "Name": "SunExpress",
            "Code": "XQ",
            "ICAO": "SXS"
        },
        {
            "Name": "Sunkar Air",
            "Code": "",
            "ICAO": "BBK"
        },
        {
            "Name": "Sunrise Airways",
            "Code": "S6",
            "ICAO": "KSZ"
        },
        {
            "Name": "Sunstate Airlines",
            "Code": "",
            "ICAO": "SSQ"
        },
        {
            "Name": "Sunwest Aviation",
            "Code": "",
            "ICAO": "CNK"
        },
        {
            "Name": "Sunwing Airlines",
            "Code": "WG",
            "ICAO": "SWG"
        },
        {
            "Name": "Suparna Airlines",
            "Code": "Y8",
            "ICAO": "YZR"
        },
        {
            "Name": "Super Air Jet",
            "Code": "IU",
            "ICAO": "SJV"
        },
        {
            "Name": "Surf Air",
            "Code": "",
            "ICAO": "URF"
        },
        {
            "Name": "Surinam Airways",
            "Code": "PY",
            "ICAO": "SLM"
        },
        {
            "Name": "Susi Air",
            "Code": "",
            "ICAO": "SQS"
        },
        {
            "Name": "Svenskt Ambulansflyg",
            "Code": "",
            "ICAO": "SWE"
        },
        {
            "Name": "Svenskt Industriflyg",
            "Code": "",
            "ICAO": "JET"
        },
        {
            "Name": "SVG Air",
            "Code": "",
            "ICAO": "SVD"
        },
        {
            "Name": "Sweden - Swedish Maritime Administration",
            "Code": "",
            "ICAO": "HMF"
        },
        {
            "Name": "Swiftair",
            "Code": "WT",
            "ICAO": "SWT"
        },
        {
            "Name": "Swiftair Hellas",
            "Code": "",
            "ICAO": "MDF"
        },
        {
            "Name": "Swiss",
            "Code": "LX",
            "ICAO": "SWR"
        },
        {
            "Name": "Swiss Air-Ambulance",
            "Code": "",
            "ICAO": "SAZ"
        },
        {
            "Name": "Swiss Flight Services",
            "Code": "",
            "ICAO": "SFS"
        },
        {
            "Name": "Swiss Global Air Lines",
            "Code": "LZ",
            "ICAO": "SWU"
        },
        {
            "Name": "Swiss Helicopter",
            "Code": "",
            "ICAO": "HSI"
        },
        {
            "Name": "Swoop",
            "Code": "WO",
            "ICAO": "WSW"
        },
        {
            "Name": "Sylt Air",
            "Code": "7E",
            "ICAO": "AWU"
        },
        {
            "Name": "Syncrude Canada",
            "Code": "",
            "ICAO": "SYN"
        },
        {
            "Name": "Syphax Airlines",
            "Code": "FS",
            "ICAO": "SYA"
        },
        {
            "Name": "Syrian Air",
            "Code": "RB",
            "ICAO": "SYR"
        },
        {
            "Name": "T'way Air",
            "Code": "TW",
            "ICAO": "TWB"
        },
        {
            "Name": "TAAG Angola Airlines",
            "Code": "DT",
            "ICAO": "DTA"
        },
        {
            "Name": "TAB Cargo",
            "Code": "2L",
            "ICAO": "BOL"
        },
        {
            "Name": "Taban Airlines",
            "Code": "",
            "ICAO": "TBN"
        },
        {
            "Name": "TAG Airlines",
            "Code": "5U",
            "ICAO": "TGU"
        },
        {
            "Name": "TAG Aviation",
            "Code": "",
            "ICAO": "VIP"
        },
        {
            "Name": "TAG Aviation Malta",
            "Code": "",
            "ICAO": "TEU"
        },
        {
            "Name": "TAG Aviation San Marino",
            "Code": "",
            "ICAO": "TAG"
        },
        {
            "Name": "Tailwind Air",
            "Code": "TQ",
            "ICAO": "PGN"
        },
        {
            "Name": "Tailwind Airlines",
            "Code": "TI",
            "ICAO": "TWI"
        },
        {
            "Name": "Tajik Air",
            "Code": "7J",
            "ICAO": "TJK"
        },
        {
            "Name": "Talon Air",
            "Code": "",
            "ICAO": "TFF"
        },
        {
            "Name": "Tanana Air Service",
            "Code": "Z3",
            "ICAO": "TNR"
        },
        {
            "Name": "Tandem-Aero",
            "Code": "TQ",
            "ICAO": "TDM"
        },
        {
            "Name": "TAP Air Portugal",
            "Code": "TP",
            "ICAO": "TAP"
        },
        {
            "Name": "Taquan Air",
            "Code": "K3",
            "ICAO": "TQN"
        },
        {
            "Name": "TAR Aerolineas",
            "Code": "YQ",
            "ICAO": "LCT"
        },
        {
            "Name": "Tarco Aviation",
            "Code": "3T",
            "ICAO": "TQQ"
        },
        {
            "Name": "Tarom",
            "Code": "RO",
            "ICAO": "ROT"
        },
        {
            "Name": "Tasman Cargo Airlines",
            "Code": "HJ",
            "ICAO": "TMN"
        },
        {
            "Name": "Tassili Airlines",
            "Code": "SF",
            "ICAO": "DTH"
        },
        {
            "Name": "Tatra JET",
            "Code": "",
            "ICAO": "TTJ"
        },
        {
            "Name": "TCA",
            "Code": "N6",
            "ICAO": "TZS"
        },
        {
            "Name": "Tchadia Airlines",
            "Code": "OT",
            "ICAO": "CDO"
        },
        {
            "Name": "Ten Airways",
            "Code": "X5",
            "ICAO": "OTJ"
        },
        {
            "Name": "Terra Avia",
            "Code": "T8",
            "ICAO": "TVR"
        },
        {
            "Name": "Texel Air",
            "Code": "",
            "ICAO": "XLR"
        },
        {
            "Name": "Tez Jet Airlines",
            "Code": "",
            "ICAO": "TEZ"
        },
        {
            "Name": "Thai AirAsia",
            "Code": "FD",
            "ICAO": "AIQ"
        },
        {
            "Name": "Thai AirAsia X",
            "Code": "XJ",
            "ICAO": "TAX"
        },
        {
            "Name": "Thai Airways",
            "Code": "TG",
            "ICAO": "THA"
        },
        {
            "Name": "Thai Eastar Jet",
            "Code": "ZT",
            "ICAO": "ESS"
        },
        {
            "Name": "Thai Lion Air",
            "Code": "SL",
            "ICAO": "TLM"
        },
        {
            "Name": "Thai Smile",
            "Code": "WE",
            "ICAO": "THD"
        },
        {
            "Name": "Thai Vietjet Air",
            "Code": "VZ",
            "ICAO": "TVJ"
        },
        {
            "Name": "Thalair",
            "Code": "",
            "ICAO": "TLJ"
        },
        {
            "Name": "The Little Jet Company",
            "Code": "",
            "ICAO": "LJC"
        },
        {
            "Name": "Thomas Cook Airlines",
            "Code": "MT",
            "ICAO": "TCX"
        },
        {
            "Name": "Thomas Cook Aviation",
            "Code": "H3",
            "ICAO": "TCN"
        },
        {
            "Name": "Thrive",
            "Code": "",
            "ICAO": "TIV"
        },
        {
            "Name": "Thunder Airlines",
            "Code": "",
            "ICAO": "THU"
        },
        {
            "Name": "Tianjin Air Cargo",
            "Code": "HT",
            "ICAO": "CTJ"
        },
        {
            "Name": "Tianjin Airlines",
            "Code": "GS",
            "ICAO": "GCR"
        },
        {
            "Name": "Tibet Airlines",
            "Code": "TV",
            "ICAO": "TBA"
        },
        {
            "Name": "Tigerair Taiwan",
            "Code": "IT",
            "ICAO": "TTW"
        },
        {
            "Name": "Time Air",
            "Code": "",
            "ICAO": "TIE"
        },
        {
            "Name": "Titan Airways",
            "Code": "ZT",
            "ICAO": "AWC"
        },
        {
            "Name": "Titan Airways Malta",
            "Code": "TM",
            "ICAO": "TMT"
        },
        {
            "Name": "Toll Aviation",
            "Code": "",
            "ICAO": "TFX"
        },
        {
            "Name": "Total Linhas Aereas",
            "Code": "L1",
            "ICAO": "TTL"
        },
        {
            "Name": "Toyo Aviation",
            "Code": "",
            "ICAO": "TOY"
        },
        {
            "Name": "Trade Air",
            "Code": "C3",
            "ICAO": "TDR"
        },
        {
            "Name": "Tradewind Aviation",
            "Code": "TJ",
            "ICAO": "GPD"
        },
        {
            "Name": "Trans Air Congo",
            "Code": "Q8",
            "ICAO": "TSG"
        },
        {
            "Name": "Trans Am Aero Express del Ecuador",
            "Code": "7T",
            "ICAO": "RTM"
        },
        {
            "Name": "Trans Guyana Airways",
            "Code": "",
            "ICAO": "TGY"
        },
        {
            "Name": "Trans Island Airways",
            "Code": "",
            "ICAO": "GGT"
        },
        {
            "Name": "Trans Maldivian Airways",
            "Code": "",
            "ICAO": "TMW"
        },
        {
            "Name": "Transair",
            "Code": "R2",
            "ICAO": "GTS"
        },
        {
            "Name": "Transair",
            "Code": "R9",
            "ICAO": "MUI"
        },
        {
            "Name": "Transavia",
            "Code": "HV",
            "ICAO": "TRA"
        },
        {
            "Name": "Transavia France",
            "Code": "TO",
            "ICAO": "TVF"
        },
        {
            "Name": "Transaviabaltika",
            "Code": "",
            "ICAO": "KTB"
        },
        {
            "Name": "Transaviaexport Airlines",
            "Code": "",
            "ICAO": "TXC"
        },
        {
            "Name": "TransNusa",
            "Code": "8B",
            "ICAO": "TNU"
        },
        {
            "Name": "Travel Management Company",
            "Code": "",
            "ICAO": "TMC"
        },
        {
            "Name": "Tri-MG Intra Asia Airlines",
            "Code": "GM",
            "ICAO": "TMG"
        },
        {
            "Name": "Tri-State Aero",
            "Code": "",
            "ICAO": "TSS"
        },
        {
            "Name": "Trigana Air",
            "Code": "IL",
            "ICAO": "TGN"
        },
        {
            "Name": "Tropic Air",
            "Code": "9N",
            "ICAO": "TOS"
        },
        {
            "Name": "Trujet",
            "Code": "2T",
            "ICAO": "TRJ"
        },
        {
            "Name": "Tsaradia",
            "Code": "TZ",
            "ICAO": "TDS"
        },
        {
            "Name": "TUI Airways",
            "Code": "BY",
            "ICAO": "TOM"
        },
        {
            "Name": "TUI fly",
            "Code": "X3",
            "ICAO": "TUI"
        },
        {
            "Name": "TUI fly Netherlands",
            "Code": "OR",
            "ICAO": "TFL"
        },
        {
            "Name": "TUI fly Nordic",
            "Code": "6B",
            "ICAO": "BLX"
        },
        {
            "Name": "TUIfly Belgium",
            "Code": "TB",
            "ICAO": "JAF"
        },
        {
            "Name": "TUM AeroCarga",
            "Code": "",
            "ICAO": "MCS"
        },
        {
            "Name": "Tunisair",
            "Code": "TU",
            "ICAO": "TAR"
        },
        {
            "Name": "Tunisair Express",
            "Code": "UG",
            "ICAO": "TUX"
        },
        {
            "Name": "Turkish Airlines",
            "Code": "TK",
            "ICAO": "THY"
        },
        {
            "Name": "Turkmenistan Airlines",
            "Code": "T5",
            "ICAO": "TUA"
        },
        {
            "Name": "Turkuaz Airlines",
            "Code": "",
            "ICAO": "TRK"
        },
        {
            "Name": "Turpial Airlines",
            "Code": "T9",
            "ICAO": "VTU"
        },
        {
            "Name": "Tus Airways",
            "Code": "U8",
            "ICAO": "CYF"
        },
        {
            "Name": "Twin Jet",
            "Code": "T7",
            "ICAO": "TJT"
        },
        {
            "Name": "Tyrol Air Ambulance",
            "Code": "",
            "ICAO": "TYW"
        },
        {
            "Name": "Tyrolean Jet Service",
            "Code": "",
            "ICAO": "TJS"
        },
        {
            "Name": "UG Jet",
            "Code": "",
            "ICAO": "UGJ"
        },
        {
            "Name": "Uganda Airlines",
            "Code": "UR",
            "ICAO": "UGD"
        },
        {
            "Name": "Ukraine Air Alliance",
            "Code": "",
            "ICAO": "UKL"
        },
        {
            "Name": "Ukraine International Airlines",
            "Code": "PS",
            "ICAO": "AUI"
        },
        {
            "Name": "Ukrainian Wings",
            "Code": "",
            "ICAO": "UWJ"
        },
        {
            "Name": "ULS Airlines Cargo",
            "Code": "GO",
            "ICAO": "KZU"
        },
        {
            "Name": "Ultimate Air Shuttle",
            "Code": "UE",
            "ICAO": "UJC"
        },
        {
            "Name": "Ultra Air",
            "Code": "OL",
            "ICAO": "ULS"
        },
        {
            "Name": "UNI Air",
            "Code": "B7",
            "ICAO": "UIA"
        },
        {
            "Name": "Uni-Top Airlines",
            "Code": "UW",
            "ICAO": "UTP"
        },
        {
            "Name": "Union Aviation",
            "Code": "",
            "ICAO": "UAG"
        },
        {
            "Name": "Unique Air",
            "Code": "",
            "ICAO": "UQA"
        },
        {
            "Name": "United Airlines",
            "Code": "UA",
            "ICAO": "UAL"
        },
        {
            "Name": "United Nations",
            "Code": "",
            "ICAO": "UNO"
        },
        {
            "Name": "United Nigeria Airlines",
            "Code": "U5",
            "ICAO": "NUA"
        },
        {
            "Name": "United States - US Forest Service",
            "Code": "",
            "ICAO": "XCN"
        },
        {
            "Name": "Uniworld Air Cargo",
            "Code": "U7",
            "ICAO": "UCG"
        },
        {
            "Name": "UPS",
            "Code": "5X",
            "ICAO": "UPS"
        },
        {
            "Name": "UR Airlines",
            "Code": "UD",
            "ICAO": "UBD"
        },
        {
            "Name": "Ural Airlines",
            "Code": "U6",
            "ICAO": "SVR"
        },
        {
            "Name": "Urumqi Airlines",
            "Code": "UQ",
            "ICAO": "CUH"
        },
        {
            "Name": "US-Bangla Airlines",
            "Code": "BS",
            "ICAO": "UBG"
        },
        {
            "Name": "USA Jet Airlines",
            "Code": "",
            "ICAO": "JUS"
        },
        {
            "Name": "UTair",
            "Code": "UT",
            "ICAO": "UTA"
        },
        {
            "Name": "UVT Aero",
            "Code": "RT",
            "ICAO": "UVT"
        },
        {
            "Name": "Uzbekistan Airways",
            "Code": "HY",
            "ICAO": "UZB"
        },
        {
            "Name": "V Air",
            "Code": "ZV",
            "ICAO": "VAX"
        },
        {
            "Name": "Valair",
            "Code": "",
            "ICAO": "VVV"
        },
        {
            "Name": "Valljet",
            "Code": "",
            "ICAO": "VLJ"
        },
        {
            "Name": "Van Air Europe",
            "Code": "V9",
            "ICAO": "VAA"
        },
        {
            "Name": "Vanilla Air",
            "Code": "JW",
            "ICAO": "VNL"
        },
        {
            "Name": "Varesh Airlines",
            "Code": "",
            "ICAO": "VRH"
        },
        {
            "Name": "Vasco",
            "Code": "0V",
            "ICAO": "VFC"
        },
        {
            "Name": "Venezolana",
            "Code": "",
            "ICAO": "VNE"
        },
        {
            "Name": "Veteran Airline",
            "Code": "",
            "ICAO": "VTF"
        },
        {
            "Name": "Veteran Airlines",
            "Code": "",
            "ICAO": "VPB"
        },
        {
            "Name": "VI Airlink",
            "Code": "",
            "ICAO": "VIL"
        },
        {
            "Name": "ViaAir",
            "Code": "VC",
            "ICAO": "SRY"
        },
        {
            "Name": "Victory Air",
            "Code": "",
            "ICAO": "FTN"
        },
        {
            "Name": "Vieques Air Link",
            "Code": "V4",
            "ICAO": "VES"
        },
        {
            "Name": "VietJet Air",
            "Code": "VJ",
            "ICAO": "VJC"
        },
        {
            "Name": "Vietnam Airlines",
            "Code": "VN",
            "ICAO": "HVN"
        },
        {
            "Name": "Vietravel Airlines",
            "Code": "VU",
            "ICAO": "VAG"
        },
        {
            "Name": "VIM Airlines",
            "Code": "NN",
            "ICAO": "MOV"
        },
        {
            "Name": "Virgin America",
            "Code": "VX",
            "ICAO": "VRD"
        },
        {
            "Name": "Virgin Atlantic",
            "Code": "VS",
            "ICAO": "VIR"
        },
        {
            "Name": "Virgin Atlantic International",
            "Code": "",
            "ICAO": "VGI"
        },
        {
            "Name": "Virgin Australia",
            "Code": "VA",
            "ICAO": "VOZ"
        },
        {
            "Name": "Virgin Australia Regional",
            "Code": "",
            "ICAO": "OZW"
        },
        {
            "Name": "Vision Air International",
            "Code": "",
            "ICAO": "VIS"
        },
        {
            "Name": "Vision Airlines",
            "Code": "V2",
            "ICAO": "RBY"
        },
        {
            "Name": "VistaJet",
            "Code": "",
            "ICAO": "VJT"
        },
        {
            "Name": "Vistara",
            "Code": "UK",
            "ICAO": "VTI"
        },
        {
            "Name": "Viva Air",
            "Code": "VH",
            "ICAO": "VVC"
        },
        {
            "Name": "Viva Air Peru",
            "Code": "VV",
            "ICAO": "VPE"
        },
        {
            "Name": "VivaAerobus",
            "Code": "VB",
            "ICAO": "VIV"
        },
        {
            "Name": "VoePass Linhas Aereas",
            "Code": "2Z",
            "ICAO": "PTB"
        },
        {
            "Name": "Volare Aviation",
            "Code": "",
            "ICAO": "VLZ"
        },
        {
            "Name": "Volaris",
            "Code": "Y4",
            "ICAO": "VOI"
        },
        {
            "Name": "Volaris Costa Rica",
            "Code": "Q6",
            "ICAO": "VOC"
        },
        {
            "Name": "Volaris El Salvador",
            "Code": "N3",
            "ICAO": "VOS"
        },
        {
            "Name": "Volato",
            "Code": "",
            "ICAO": "TMB"
        },
        {
            "Name": "Volga-Dnepr Airlines",
            "Code": "VI",
            "ICAO": "VDA"
        },
        {
            "Name": "Volotea",
            "Code": "V7",
            "ICAO": "VOE"
        },
        {
            "Name": "Voluxis",
            "Code": "",
            "ICAO": "VXS"
        },
        {
            "Name": "Voyage Air",
            "Code": "",
            "ICAO": "VRG"
        },
        {
            "Name": "Voyageur Airways",
            "Code": "VC",
            "ICAO": "VAL"
        },
        {
            "Name": "Vueling",
            "Code": "VY",
            "ICAO": "VLG"
        },
        {
            "Name": "VW Air Service",
            "Code": "",
            "ICAO": "BTX"
        },
        {
            "Name": "Wamos Air",
            "Code": "EB",
            "ICAO": "PLM"
        },
        {
            "Name": "Warbelows Air Ventures",
            "Code": "4W",
            "ICAO": "WAV"
        },
        {
            "Name": "Wasaya Airways",
            "Code": "",
            "ICAO": "WSG"
        },
        {
            "Name": "Wataniya Airways",
            "Code": "",
            "ICAO": "WAN"
        },
        {
            "Name": "West Air",
            "Code": "PN",
            "ICAO": "CHB"
        },
        {
            "Name": "West Air",
            "Code": "",
            "ICAO": "WLX"
        },
        {
            "Name": "West Air",
            "Code": "",
            "ICAO": "PCM"
        },
        {
            "Name": "West Air Sweden",
            "Code": "",
            "ICAO": "SWN"
        },
        {
            "Name": "West Atlantic",
            "Code": "",
            "ICAO": "NPT"
        },
        {
            "Name": "West Coast Charters",
            "Code": "",
            "ICAO": "WCC"
        },
        {
            "Name": "Westair Aviation",
            "Code": "WV",
            "ICAO": "WAA"
        },
        {
            "Name": "Western Air",
            "Code": "WU",
            "ICAO": "WST"
        },
        {
            "Name": "Western Air Express",
            "Code": "",
            "ICAO": "WAE"
        },
        {
            "Name": "Western Aircraft",
            "Code": "ST",
            "ICAO": "STT"
        },
        {
            "Name": "Western Global Airlines",
            "Code": "KD",
            "ICAO": "WGN"
        },
        {
            "Name": "WestJet",
            "Code": "WS",
            "ICAO": "WJA"
        },
        {
            "Name": "WestJet Encore",
            "Code": "WR",
            "ICAO": "WEN"
        },
        {
            "Name": "White",
            "Code": "WI",
            "ICAO": "WHT"
        },
        {
            "Name": "Wideroe",
            "Code": "WF",
            "ICAO": "WIF"
        },
        {
            "Name": "Wiggins Airways",
            "Code": "",
            "ICAO": "WIG"
        },
        {
            "Name": "Wiking Helikopter Service",
            "Code": "",
            "ICAO": "WHS"
        },
        {
            "Name": "Winair",
            "Code": "WM",
            "ICAO": "WIA"
        },
        {
            "Name": "Windrose Air Jetcharter",
            "Code": "",
            "ICAO": "QGA"
        },
        {
            "Name": "Windrose Airlines",
            "Code": "7W",
            "ICAO": "WRC"
        },
        {
            "Name": "Wingo",
            "Code": "P5",
            "ICAO": "RPB"
        },
        {
            "Name": "Wingo Panama",
            "Code": "",
            "ICAO": "WWP"
        },
        {
            "Name": "Wings Air",
            "Code": "IW",
            "ICAO": "WON"
        },
        {
            "Name": "Wings of Lebanon",
            "Code": "W7",
            "ICAO": "WLB"
        },
        {
            "Name": "Wizz Air",
            "Code": "W6",
            "ICAO": "WZZ"
        },
        {
            "Name": "Wizz Air Abu Dhabi",
            "Code": "5W",
            "ICAO": "WAZ"
        },
        {
            "Name": "Wizz Air UK",
            "Code": "W9",
            "ICAO": "WUK"
        },
        {
            "Name": "World Atlantic Airlines",
            "Code": "WL",
            "ICAO": "WAL"
        },
        {
            "Name": "World Cargo Airlines",
            "Code": "3G",
            "ICAO": "WCM"
        },
        {
            "Name": "World2Fly",
            "Code": "2W",
            "ICAO": "WFL"
        },
        {
            "Name": "World2Fly Portugal",
            "Code": "3P",
            "ICAO": "WPT"
        },
        {
            "Name": "Worldwide Jet Charter",
            "Code": "",
            "ICAO": "WWI"
        },
        {
            "Name": "Wright Air Service",
            "Code": "8V",
            "ICAO": "WRF"
        },
        {
            "Name": "Xfly",
            "Code": "EE",
            "ICAO": "EST"
        },
        {
            "Name": "Xiamen Air",
            "Code": "MF",
            "ICAO": "CXA"
        },
        {
            "Name": "Xo",
            "Code": "",
            "ICAO": "XOJ"
        },
        {
            "Name": "Yakutia Airlines",
            "Code": "R3",
            "ICAO": "SYL"
        },
        {
            "Name": "Yamal Airlines",
            "Code": "YC",
            "ICAO": "LLM"
        },
        {
            "Name": "YanAir",
            "Code": "YE",
            "ICAO": "ANR"
        },
        {
            "Name": "Yemenia",
            "Code": "IY",
            "ICAO": "IYE"
        },
        {
            "Name": "Yeti Airlines",
            "Code": "YT",
            "ICAO": "NYT"
        },
        {
            "Name": "YTO Cargo Airlines",
            "Code": "YG",
            "ICAO": "HYT"
        },
        {
            "Name": "Zagros Airlines",
            "Code": "ZO",
            "ICAO": "IZG"
        },
        {
            "Name": "Zambia Airways",
            "Code": "ZN",
            "ICAO": "AZB"
        },
        {
            "Name": "Zambian Airways",
            "Code": "",
            "ICAO": "MBN"
        },
        {
            "Name": "Zanair",
            "Code": "",
            "ICAO": "TAN"
        },
        {
            "Name": "Zenflight",
            "Code": "",
            "ICAO": "XEN"
        },
        {
            "Name": "Zenith Aviation",
            "Code": "",
            "ICAO": "BZE"
        },
        {
            "Name": "Zetavia",
            "Code": "ZK",
            "ICAO": "ZAV"
        },
        {
            "Name": "Zil Air",
            "Code": "",
            "ICAO": "SYZ"
        },
        {
            "Name": "Zimex Aviation",
            "Code": "XM",
            "ICAO": "IMX"
        },
        {
            "Name": "Zimex Aviation Austria",
            "Code": "",
            "ICAO": "AZD"
        },
        {
            "Name": "ZIPAIR",
            "Code": "ZG",
            "ICAO": "TZP"
        },
        {
            "Name": "Zorex",
            "Code": "",
            "ICAO": "ORZ"
        }
    ]
}