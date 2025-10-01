document.addEventListener('DOMContentLoaded', function() {
    const finDropdown = document.getElementById('finDropdown');
    const crewDropdown = document.getElementById('crewDropdown');
    const fullscreenImage = document.getElementById('fullscreenImage');
    const infoDiv = document.getElementById('info');
    
    const data = [
    { id: 0, crew: 2, pageNumber: 1, lavkit: 1, soap: 1 },

//320 L1
    { id: 235, crew: 2, pageNumber: 4, lavkit: 0, soap: 1 },
    { id: 236, crew: 2, pageNumber: 4, lavkit: 0, soap: 1 }, { id: 237, crew: 2, pageNumber: 4, lavkit: 0, soap: 1 },
    { id: 238, crew: 2, pageNumber: 4, lavkit: 0, soap: 1 }, { id: 239, crew: 2, pageNumber: 4, lavkit: 0, soap: 1 },
    { id: 240, crew: 2, pageNumber: 4, lavkit: 0, soap: 1 }, { id: 241, crew: 2, pageNumber: 4, lavkit: 0, soap: 1 },
    { id: 242, crew: 2, pageNumber: 4, lavkit: 0, soap: 1 }, { id: 401, crew: 2, pageNumber: 4, lavkit: 0, soap: 1 },
    { id: 402, crew: 2, pageNumber: 4, lavkit: 0, soap: 1 }, { id: 405, crew: 2, pageNumber: 4, lavkit: 0, soap: 1 },

//320 L2
    { id: 417, crew: 2, pageNumber: 6, lavkit: 0, soap: 1 }, { id: 418, crew: 2, pageNumber: 6, lavkit: 0, soap: 1 },
    { id: 419, crew: 2, pageNumber: 6, lavkit: 0, soap: 1 }, { id: 420, crew: 2, pageNumber: 6, lavkit: 0, soap: 1 },

//320 L2
    { id: 421, crew: 2, pageNumber: 8, lavkit: 0, soap: 1 }, { id: 422, crew: 2, pageNumber: 8, lavkit: 0, soap: 1 },

//320 Dream

//320 Jetz
    { id: 225, crew: 2, pageNumber: 12, lavkit: 0, soap: 1 }, { id: 226, crew: 2, pageNumber: 12, lavkit: 0, soap: 1 },
    { id: 232, crew: 2, pageNumber: 12, lavkit: 0, soap: 1 }, { id: 416, crew: 2, pageNumber: 12, lavkit: 0, soap: 1 },

//321 L1
    { id: 455, crew: 2, pageNumber: 14, lavkit: 0, soap: 1 }, { id: 456, crew: 2, pageNumber: 14, lavkit: 0, soap: 1 },
    { id: 458, crew: 2, pageNumber: 14, lavkit: 0, soap: 1 }, { id: 459, crew: 2, pageNumber: 14, lavkit: 0, soap: 1 }, 
    { id: 461, crew: 2, pageNumber: 14, lavkit: 0, soap: 1 }, { id: 462, crew: 2, pageNumber: 14, lavkit: 0, soap: 1 },
    { id: 473, crew: 2, pageNumber: 14, lavkit: 0, soap: 1 }, 

//321 L2
    { id: 465, crew: 2, pageNumber: 16, lavkit: 0, soap: 1 }, { id: 466, crew: 2, pageNumber: 16, lavkit: 0, soap: 1 },
    { id: 467, crew: 2, pageNumber: 16, lavkit: 0, soap: 1 }, 
    { id: 483, crew: 2, pageNumber: 16, lavkit: 0, soap: 1 }, { id: 484, crew: 2, pageNumber: 16, lavkit: 0, soap: 1 },

//321 Dream
    { id: 451, crew: 2, pageNumber: 18, lavkit: 0, soap: 1 }, { id: 452, crew: 2, pageNumber: 18, lavkit: 0, soap: 1 },
    { id: 453, crew: 2, pageNumber: 18, lavkit: 0, soap: 1 }, { id: 454, crew: 2, pageNumber: 18, lavkit: 0, soap: 1 },
    { id: 457, crew: 2, pageNumber: 18, lavkit: 0, soap: 1 }, { id: 460, crew: 2, pageNumber: 18, lavkit: 0, soap: 1 },
    { id: 463, crew: 2, pageNumber: 18, lavkit: 0, soap: 1 }, { id: 464, crew: 2, pageNumber: 18, lavkit: 0, soap: 1 },

//321 GH

//220
    { id: 101, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 },
    { id: 102, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 }, { id: 103, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 },
    { id: 104, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 }, { id: 105, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 },
    { id: 106, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 }, { id: 107, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 },
    { id: 108, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 }, { id: 109, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 },
    { id: 110, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 }, { id: 111, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 },
    { id: 112, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 }, { id: 113, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 },
    { id: 114, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 }, { id: 115, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 },
    { id: 116, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 }, { id: 117, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 },
    { id: 118, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 }, { id: 119, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 },
    { id: 120, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 }, { id: 121, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 },
    { id: 122, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 }, { id: 123, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 },
    { id: 124, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 }, { id: 125, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 },
    { id: 126, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 }, { id: 127, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 },
    { id: 128, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 }, { id: 129, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 },
    { id: 130, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 }, { id: 131, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 },
    { id: 132, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 }, { id: 133, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 },
    { id: 134, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 }, { id: 135, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 },
    { id: 136, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 }, { id: 137, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 },
    { id: 138, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 }, { id: 139, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 },
    { id: 140, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 }, { id: 141, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 },
    { id: 142, crew: 2, pageNumber: 22, lavkit: 1, soap: 1 },

//737-8 Max
    { id: 501, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 },
    { id: 502, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 }, { id: 503, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 },
    { id: 504, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 }, { id: 505, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 },
    { id: 506, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 }, { id: 507, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 },
    { id: 508, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 }, { id: 509, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 },
    { id: 510, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 }, { id: 511, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 },
    { id: 512, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 }, { id: 513, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 },
    { id: 514, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 }, { id: 515, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 },
    { id: 516, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 }, { id: 517, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 },
    { id: 518, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 }, { id: 519, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 },
    { id: 520, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 }, { id: 521, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 },
    { id: 522, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 }, { id: 523, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 },
    { id: 524, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 }, { id: 525, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 },
    { id: 526, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 }, { id: 527, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 },
    { id: 528, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 }, { id: 529, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 },
    { id: 530, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 }, { id: 531, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 },
    { id: 532, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 }, { id: 533, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 },
    { id: 534, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 }, { id: 535, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 },
    { id: 536, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 }, { id: 537, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 },
    { id: 538, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 }, { id: 539, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 },
    { id: 540, crew: 2, pageNumber: 24, lavkit: 1, soap: 1 },

//737-8 Max Uplift
    { id: 571, crew: 2, pageNumber: 26, lavkit: 1, soap: 1 }, { id: 572, crew: 2, pageNumber: 26, lavkit: 1, soap: 1 },
    { id: 573, crew: 2, pageNumber: 26, lavkit: 1, soap: 1 }, { id: 574, crew: 2, pageNumber: 26, lavkit: 1, soap: 1 },
    { id: 575, crew: 2, pageNumber: 26, lavkit: 1, soap: 1 }, { id: 576, crew: 2, pageNumber: 26, lavkit: 1, soap: 1 },
    { id: 577, crew: 2, pageNumber: 26, lavkit: 1, soap: 1 }, { id: 578, crew: 2, pageNumber: 26, lavkit: 1, soap: 1 },

//321 XLR

//R319
    { id: 255, crew: 2, pageNumber: 31, lavkit: 0, soap: 1 }, { id: 256, crew: 2, pageNumber: 31, lavkit: 0, soap: 1 },
    { id: 257, crew: 2, pageNumber: 31, lavkit: 0, soap: 1 }, { id: 259, crew: 2, pageNumber: 31, lavkit: 0, soap: 1 },
    { id: 262, crew: 2, pageNumber: 31, lavkit: 0, soap: 1 }, { id: 263, crew: 2, pageNumber: 31, lavkit: 0, soap: 1 },
    { id: 272, crew: 2, pageNumber: 31, lavkit: 0, soap: 1 }, { id: 273, crew: 2, pageNumber: 31, lavkit: 0, soap: 1 },
    { id: 276, crew: 2, pageNumber: 31, lavkit: 0, soap: 1 }, { id: 277, crew: 2, pageNumber: 31, lavkit: 0, soap: 1 },
    { id: 278, crew: 2, pageNumber: 31, lavkit: 0, soap: 1 }, { id: 279, crew: 2, pageNumber: 31, lavkit: 0, soap: 1 },
    { id: 281, crew: 2, pageNumber: 31, lavkit: 0, soap: 1 },
    { id: 283, crew: 2, pageNumber: 31, lavkit: 0, soap: 1 }, { id: 284, crew: 2, pageNumber: 31, lavkit: 0, soap: 1 },
    { id: 286, crew: 2, pageNumber: 31, lavkit: 0, soap: 1 }, { id: 287, crew: 2, pageNumber: 31, lavkit: 0, soap: 1 },
    { id: 290, crew: 2, pageNumber: 31, lavkit: 0, soap: 1 }, 

//R320
    { id: 243, crew: 2, pageNumber: 33, lavkit: 0, soap: 1 },
    { id: 244, crew: 2, pageNumber: 33, lavkit: 0, soap: 1 }, { id: 245, crew: 2, pageNumber: 33, lavkit: 0, soap: 1 },
    { id: 246, crew: 2, pageNumber: 33, lavkit: 0, soap: 1 }, { id: 247, crew: 2, pageNumber: 33, lavkit: 0, soap: 1 },

//R321
    { id: 468, crew: 2, pageNumber: 35, lavkit: 0, soap: 1 }, { id: 469, crew: 2, pageNumber: 35, lavkit: 0, soap: 1 },
    { id: 470, crew: 2, pageNumber: 35, lavkit: 0, soap: 1 }, { id: 471, crew: 2, pageNumber: 35, lavkit: 0, soap: 1 },
    { id: 472, crew: 2, pageNumber: 35, lavkit: 0, soap: 1 }, { id: 474, crew: 2, pageNumber: 35, lavkit: 0, soap: 1 },
    { id: 475, crew: 2, pageNumber: 35, lavkit: 0, soap: 1 }, { id: 476, crew: 2, pageNumber: 35, lavkit: 0, soap: 1 },
    { id: 477, crew: 2, pageNumber: 35, lavkit: 0, soap: 1 }, { id: 478, crew: 2, pageNumber: 35, lavkit: 0, soap: 1 },
    { id: 479, crew: 2, pageNumber: 35, lavkit: 0, soap: 1 }, { id: 480, crew: 2, pageNumber: 35, lavkit: 0, soap: 1 },
    { id: 481, crew: 2, pageNumber: 35, lavkit: 0, soap: 1 }, { id: 482, crew: 2, pageNumber: 35, lavkit: 0, soap: 1 },


//    { id: 251, crew: 2, pageNumber: 3, lavkit: 0, soap: 1 }, { id: 252, crew: 2, pageNumber: 3, lavkit: 0, soap: 1 },
//    { id: 260, crew: 2, pageNumber: 5, lavkit: 0, soap: 1 },
//    { id: 415, crew: 2, pageNumber: 9, lavkit: 0, soap: 1 }, 


//A330-300 Dream
    { id: 931, crew: 3, pageNumber: 39, lavkit: 1, soap: 1 }, { id: 932, crew: 3, pageNumber: 39, lavkit: 1, soap: 1 },
    { id: 933, crew: 3, pageNumber: 39, lavkit: 1, soap: 1 }, { id: 934, crew: 3, pageNumber: 39, lavkit: 1, soap: 1 },
    { id: 935, crew: 3, pageNumber: 39, lavkit: 1, soap: 1 }, { id: 936, crew: 3, pageNumber: 39, lavkit: 1, soap: 1 },
    { id: 937, crew: 3, pageNumber: 39, lavkit: 1, soap: 1 }, { id: 938, crew: 3, pageNumber: 39, lavkit: 1, soap: 1 },
    { id: 939, crew: 3, pageNumber: 39, lavkit: 1, soap: 1 }, { id: 940, crew: 3, pageNumber: 39, lavkit: 1, soap: 1 },
    { id: 941, crew: 3, pageNumber: 39, lavkit: 1, soap: 1 }, { id: 942, crew: 3, pageNumber: 39, lavkit: 1, soap: 1 },
    { id: 943, crew: 3, pageNumber: 39, lavkit: 1, soap: 1 }, { id: 944, crew: 3, pageNumber: 39, lavkit: 1, soap: 1 },
    { id: 945, crew: 3, pageNumber: 39, lavkit: 1, soap: 1 }, { id: 947, crew: 3, pageNumber: 39, lavkit: 1, soap: 1 },

    { id: 931, crew: 4, pageNumber: 43, lavkit: 1, soap: 1 }, { id: 932, crew: 4, pageNumber: 43, lavkit: 1, soap: 1 },
    { id: 933, crew: 4, pageNumber: 43, lavkit: 1, soap: 1 }, { id: 934, crew: 4, pageNumber: 43, lavkit: 1, soap: 1 },
    { id: 935, crew: 4, pageNumber: 43, lavkit: 1, soap: 1 }, { id: 936, crew: 4, pageNumber: 43, lavkit: 1, soap: 1 },
    { id: 937, crew: 4, pageNumber: 43, lavkit: 1, soap: 1 }, { id: 938, crew: 4, pageNumber: 43, lavkit: 1, soap: 1 },
    { id: 939, crew: 4, pageNumber: 43, lavkit: 1, soap: 1 }, { id: 940, crew: 4, pageNumber: 43, lavkit: 1, soap: 1 },
    { id: 941, crew: 4, pageNumber: 43, lavkit: 1, soap: 1 }, { id: 942, crew: 4, pageNumber: 43, lavkit: 1, soap: 1 },
    { id: 943, crew: 4, pageNumber: 43, lavkit: 1, soap: 1 }, { id: 944, crew: 4, pageNumber: 43, lavkit: 1, soap: 1 },
    { id: 945, crew: 4, pageNumber: 43, lavkit: 1, soap: 1 }, { id: 947, crew: 4, pageNumber: 43, lavkit: 1, soap: 1 },

//A330-300 L2
    { id: 946, crew: 3, pageNumber: 48, lavkit: 1, soap: 1 }, { id: 948, crew: 3, pageNumber: 48, lavkit: 1, soap: 1 },
    { id: 949, crew: 3, pageNumber: 48, lavkit: 1, soap: 1 }, { id: 950, crew: 3, pageNumber: 48, lavkit: 1, soap: 1 },

    { id: 946, crew: 4, pageNumber: 52, lavkit: 1, soap: 1 }, { id: 948, crew: 4, pageNumber: 52, lavkit: 1, soap: 1 },
    { id: 949, crew: 4, pageNumber: 52, lavkit: 1, soap: 1 }, { id: 950, crew: 4, pageNumber: 52, lavkit: 1, soap: 1 },

//787-8
    { id: 801, crew: 3, pageNumber: 57, lavkit: 1, soap: 0 }, { id: 802, crew: 3, pageNumber: 57, lavkit: 1, soap: 0 },
    { id: 803, crew: 3, pageNumber: 57, lavkit: 1, soap: 0 }, { id: 804, crew: 3, pageNumber: 57, lavkit: 1, soap: 0 },
    { id: 805, crew: 3, pageNumber: 57, lavkit: 1, soap: 0 }, { id: 806, crew: 3, pageNumber: 57, lavkit: 1, soap: 0 },
    { id: 807, crew: 3, pageNumber: 57, lavkit: 1, soap: 0 }, { id: 808, crew: 3, pageNumber: 57, lavkit: 1, soap: 0 },

    { id: 801, crew: 4, pageNumber: 61, lavkit: 1, soap: 0 }, { id: 802, crew: 4, pageNumber: 61, lavkit: 1, soap: 0 },
    { id: 803, crew: 4, pageNumber: 61, lavkit: 1, soap: 0 }, { id: 804, crew: 4, pageNumber: 61, lavkit: 1, soap: 0 },
    { id: 805, crew: 4, pageNumber: 61, lavkit: 1, soap: 0 }, { id: 806, crew: 4, pageNumber: 61, lavkit: 1, soap: 0 },
    { id: 807, crew: 4, pageNumber: 61, lavkit: 1, soap: 0 }, { id: 808, crew: 4, pageNumber: 61, lavkit: 1, soap: 0 },

//787-9
    { id: 831, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 }, { id: 832, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 },
    { id: 833, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 }, { id: 834, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 },
    { id: 835, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 }, { id: 836, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 },
    { id: 837, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 }, { id: 838, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 },
    { id: 839, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 }, { id: 840, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 },
    { id: 841, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 }, { id: 842, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 },
    { id: 843, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 }, { id: 844, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 },
    { id: 845, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 }, { id: 846, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 },
    { id: 847, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 }, { id: 848, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 },
    { id: 849, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 }, { id: 850, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 },
    { id: 851, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 }, { id: 852, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 },
    { id: 853, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 }, { id: 854, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 },
    { id: 855, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 }, { id: 856, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 },
    { id: 857, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 }, { id: 858, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 },
    { id: 859, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 }, { id: 860, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 },
    { id: 861, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 }, { id: 862, crew: 3, pageNumber: 66, lavkit: 1, soap: 0 },
 
    { id: 831, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 }, { id: 832, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 },
    { id: 833, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 }, { id: 834, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 },
    { id: 835, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 }, { id: 836, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 },
    { id: 837, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 }, { id: 838, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 },
    { id: 839, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 }, { id: 840, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 },
    { id: 841, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 }, { id: 842, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 },
    { id: 843, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 }, { id: 844, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 },
    { id: 845, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 }, { id: 846, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 },
    { id: 847, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 }, { id: 848, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 },
    { id: 849, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 }, { id: 850, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 },
    { id: 851, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 }, { id: 852, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 },
    { id: 853, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 }, { id: 854, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 },
    { id: 855, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 }, { id: 856, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 },
    { id: 857, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 }, { id: 858, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 },
    { id: 859, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 }, { id: 860, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 },
    { id: 861, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 }, { id: 862, crew: 4, pageNumber: 70, lavkit: 1, soap: 0 },
 
//878-10

//777-200LR
    { id: 701, crew: 3, pageNumber: 84, lavkit: 1, soap: 1 }, { id: 702, crew: 3, pageNumber: 84, lavkit: 1, soap: 1 },
    { id: 703, crew: 3, pageNumber: 84, lavkit: 1, soap: 1 }, { id: 704, crew: 3, pageNumber: 84, lavkit: 1, soap: 1 },
    { id: 705, crew: 3, pageNumber: 84, lavkit: 1, soap: 1 }, { id: 706, crew: 3, pageNumber: 84, lavkit: 1, soap: 1 },

    { id: 701, crew: 4, pageNumber: 88, lavkit: 1, soap: 1 }, { id: 702, crew: 4, pageNumber: 88, lavkit: 1, soap: 1 },
    { id: 703, crew: 4, pageNumber: 88, lavkit: 1, soap: 1 }, { id: 704, crew: 4, pageNumber: 88, lavkit: 1, soap: 1 },
    { id: 705, crew: 4, pageNumber: 88, lavkit: 1, soap: 1 }, { id: 706, crew: 4, pageNumber: 88, lavkit: 1, soap: 1 },

//777-300ER
    { id: 731, crew: 3, pageNumber: 93, lavkit: 1, soap: 1 }, { id: 732, crew: 3, pageNumber: 93, lavkit: 1, soap: 1 },
    { id: 733, crew: 3, pageNumber: 93, lavkit: 1, soap: 1 }, { id: 734, crew: 3, pageNumber: 93, lavkit: 1, soap: 1 },
    { id: 735, crew: 3, pageNumber: 93, lavkit: 1, soap: 1 }, { id: 736, crew: 3, pageNumber: 93, lavkit: 1, soap: 1 },
    { id: 737, crew: 3, pageNumber: 93, lavkit: 1, soap: 1 }, { id: 738, crew: 3, pageNumber: 93, lavkit: 1, soap: 1 },
    { id: 739, crew: 3, pageNumber: 93, lavkit: 1, soap: 1 }, { id: 740, crew: 3, pageNumber: 93, lavkit: 1, soap: 1 },
    { id: 741, crew: 3, pageNumber: 93, lavkit: 1, soap: 1 }, { id: 742, crew: 3, pageNumber: 93, lavkit: 1, soap: 1 },

    { id: 731, crew: 4, pageNumber: 97, lavkit: 1, soap: 1 }, { id: 732, crew: 4, pageNumber: 97, lavkit: 1, soap: 1 },
    { id: 733, crew: 4, pageNumber: 97, lavkit: 1, soap: 1 }, { id: 734, crew: 4, pageNumber: 97, lavkit: 1, soap: 1 },
    { id: 735, crew: 4, pageNumber: 97, lavkit: 1, soap: 1 }, { id: 736, crew: 4, pageNumber: 97, lavkit: 1, soap: 1 },
    { id: 737, crew: 4, pageNumber: 97, lavkit: 1, soap: 1 }, { id: 738, crew: 4, pageNumber: 97, lavkit: 1, soap: 1 },
    { id: 739, crew: 4, pageNumber: 97, lavkit: 1, soap: 1 }, { id: 740, crew: 4, pageNumber: 97, lavkit: 1, soap: 1 },
    { id: 741, crew: 4, pageNumber: 97, lavkit: 1, soap: 1 }, { id: 742, crew: 4, pageNumber: 97, lavkit: 1, soap: 1 },

//777-300HD
    { id: 743, crew: 3, pageNumber: 102, lavkit: 1, soap: 1 }, { id: 744, crew: 3, pageNumber: 102, lavkit: 1, soap: 1 },
    { id: 745, crew: 3, pageNumber: 102, lavkit: 1, soap: 1 }, { id: 746, crew: 3, pageNumber: 102, lavkit: 1, soap: 1 },
    { id: 747, crew: 3, pageNumber: 102, lavkit: 1, soap: 1 }, { id: 748, crew: 3, pageNumber: 102, lavkit: 1, soap: 1 },
    { id: 749, crew: 3, pageNumber: 102, lavkit: 1, soap: 1 },

    { id: 743, crew: 4, pageNumber: 106, lavkit: 1, soap: 1 }, { id: 744, crew: 4, pageNumber: 106, lavkit: 1, soap: 1 },
    { id: 745, crew: 4, pageNumber: 106, lavkit: 1, soap: 1 }, { id: 746, crew: 4, pageNumber: 106, lavkit: 1, soap: 1 },
    { id: 747, crew: 4, pageNumber: 106, lavkit: 1, soap: 1 }, { id: 748, crew: 4, pageNumber: 106, lavkit: 1, soap: 1 },
    { id: 749, crew: 4, pageNumber: 106, lavkit: 1, soap: 1 }

    ];


    // --- finDropdown 채우기: ID와 Crew 수를 결합한 고유 값 사용 ---
    // 중복 제거를 위해 Map 사용
    const uniqueFinOptions = new Map();

    data.filter(item => item.id !== 0)
        .sort((a, b) => a.id - b.id)
        .forEach(item => {
            // value를 'id-crew' 형식으로 만듭니다 (예: '931-3', '931-4')
            const value = `${item.id}-${item.crew}`;
            // textContent에 crew 정보까지 포함합니다.
            const textContent = `${item.id} - ${item.crew} Crews`;
            // Map을 사용하여 고유한 옵션만 추가합니다.
            if (!uniqueFinOptions.has(value)) {
                uniqueFinOptions.set(value, { value, textContent });
            }
        });

    // Placeholder 추가
    const selectItem = data.find(item => item.id === 0);
    if (selectItem) {
        const opt = document.createElement('option');
        opt.value = ''; // Placeholder는 빈 값
        opt.textContent = 'Select FIN';
        opt.disabled = true;
        opt.selected = true;
        finDropdown.appendChild(opt);
    }

    // 고유한 FIN 옵션을 드롭다운에 추가
    uniqueFinOptions.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.textContent;
        finDropdown.appendChild(option);
    });

    // --- crewDropdown 옵션을 갱신하고 이미지 및 정보 업데이트하는 통합 함수 ---
    function updateSelections(selectedFinCrew) {
        if (!selectedFinCrew) {
            crewDropdown.innerHTML = '';
            fullscreenImage.src = '';
            infoDiv.textContent = '';
            return;
        }

        const [finIdStr, finCrewStr] = selectedFinCrew.split('-');
        const finId = parseInt(finIdStr, 10);
        const finCrew = parseInt(finCrewStr, 10);

        // 1. Crew 옵션 갱신
        let crewOptions = [];
        if (finCrew === 2) {
            crewOptions = [
                { value: '1', text: '1' },
                { value: '2', text: '2' }
            ];
        } else if (finCrew === 3) {
            crewOptions = [
                { value: '0', text: '-' },
                { value: '1', text: '1' },
                { value: '2', text: '2' },
                { value: '3', text: '3' }
            ];
        } else if (finCrew === 4) {
            crewOptions = [
                { value: '0', text: '-' },
                { value: '1', text: '1' },
                { value: '2', text: '2' },
                { value: '3', text: '3' },
                { value: '4', text: '4' }
            ];
        }

        const currentCrewValue = crewDropdown.value; // 현재 선택된 crew 값을 저장

        crewDropdown.innerHTML = ''; // 기존 옵션 제거
        crewOptions.forEach(opt => {
            const el = document.createElement('option');
            el.value = opt.value;
            el.textContent = opt.text;
            crewDropdown.appendChild(el);
        });

        // crewDropdown의 기본값 설정: 이전 값이 있으면 유지, 없으면 적절한 기본값 설정
        if ([...crewDropdown.options].some(o => o.value === currentCrewValue)) {
            crewDropdown.value = currentCrewValue;
        } else if (finCrew <= 2 && [...crewDropdown.options].some(o => o.value === '2')) {
            crewDropdown.value = '2'; // 2 Crews 항공기는 기본 2
        } else if (finCrew > 2 && [...crewDropdown.options].some(o => o.value === '0')) {
            crewDropdown.value = '0'; // 광동체는 기본 '-'
        } else if (crewDropdown.options.length > 0) {
            crewDropdown.selectedIndex = 0;
        }

        // 2. 이미지 및 정보 업데이트 (crewDropdown.value에 따라 최종 결정)
        updateImageAndInfo(selectedFinCrew);
    }

// --- 이미지 및 정보를 업데이트하는 최종 함수 (FIN/Crew 선택 및 Crew 드롭다운 변경 시 호출) ---
function updateImageAndInfo(selectedFinCrew) {
    if (!selectedFinCrew) return;

    const [finIdStr, finCrewStr] = selectedFinCrew.split('-');
    const finId = parseInt(finIdStr, 10);
    const finCrew = parseInt(finCrewStr, 10);
    const crewValue = parseInt(crewDropdown.value, 10); // 👈 현재 선택된 Crew 값 (0, 1, 2, 3, 4)

    // 선택된 FIN ID와 최대 Crew에 해당하는 데이터 항목 찾기
    const selectedItem = data.find(item => item.id === finId && item.crew === finCrew);

    if (!selectedItem) {
        fullscreenImage.src = '';
        infoDiv.textContent = 'Data not found for selection.';
        return;
    }

    const basePageNumber = selectedItem.pageNumber;
    let offset = 0;

    // 🌟 핵심 수정: finCrew (최대 승무원) 및 crewValue (선택된 승무원)에 따른 offset 계산
    if (finCrew === 2) {
        // FIN 최대 Crew가 2인 경우 (협동체 A320/B737)
        if (crewValue === 2) {
            // 선택된 Crew가 2일 경우: pageNumber에 1을 더함
            offset = 1;
        } else {
            // 선택된 Crew가 1일 경우: pageNumber는 그대로 (offset = 0)
            offset = 0;
        }
    } else if (finCrew >= 3) {
        // FIN 최대 Crew가 3 또는 4인 경우 (광동체 A330/B787/B777)
        // 선택된 crewValue (0, 1, 2, 3, 4)를 offset으로 사용
        // (단, crewValue 0은 '-'이므로 페이지는 변동 없음)
        offset = crewValue; 
    }

    const pageNumber = basePageNumber + offset;

    // 이미지 파일 번호 계산: pageNumber보다 1 작게 설정
    // 예: Page 4 -> PG0003.jpg
    const fileNumber = pageNumber - 1; 

    // 이미지 이름 설정
    const imageName = `PG${fileNumber.toString().padStart(4, '0')}.jpg`;
    fullscreenImage.src = imageName;

    // info 업데이트
    infoDiv.textContent = `Page: ${pageNumber} | File: ${imageName} | Lav Kit: ${selectedItem.lavkit === 1 ? 'T' : 'S'} | Soap: ${selectedItem.soap === 1 ? 'T' : 'S'}`;
}
