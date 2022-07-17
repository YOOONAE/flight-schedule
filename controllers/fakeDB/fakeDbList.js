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

