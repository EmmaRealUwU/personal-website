
        function timeDifference(current, previous) {
        
            var sPerMinute = 60 * 1000;
            var sPerHour = sPerMinute * 60;
            var sPerDay = sPerHour * 24;
            var sPerMonth = sPerDay * 30;
            var sPerYear = sPerDay * 365;
            var sPerCentury = sPerYear * 100;
        
            var elapsed = current - previous;
        
            if (elapsed < sPerMinute) {
                return Math.round(elapsed) + ' seconds ago';   
            }
        
            else if (elapsed < sPerHour) {
                var minutes = elapsed/sPerMinute;
                if(Math.round(minutes) == 1)
                {
                    return '1 minute ago';
                }
                return Math.round(elapsed/sPerMinute) + ' minutes ago';   
            }
        
            else if (elapsed < sPerDay ) {
                var hours = elapsed/sPerHour;
                if(Math.round(hours) == 1)
                {
                    return '1 hour ago';
                }
                return Math.round(hours) + ' hours ago';   
            }
        
            else if (elapsed < sPerMonth) {
                var days = elapsed/sPerDay;
                if(Math.round(days) == 1)
                {
                    return '1 day ago';
                }
                return Math.round(days) + ' days ago';   
            }
        
            else if (elapsed < sPerYear) {
                var months = elapsed/sPerMonth;
                if(Math.round(months) == 1)
                {
                    return '1 month ago';
                }
                return Math.round(months) + ' months ago';   
            }
        
            else 
            {
                var years = elapsed/sPerYear;
                if(Math.round(years) == 1)
                {
                    return '1 year ago';
                }
                return Math.round(years) + ' years ago';   
            }
        }
        
        var now = Date.now()
                
        var hrtStart = 1715927185000;
        document.getElementById("AboutMeText").innerHTML = "Resident trans girl <br/> Started HRT " + timeDifference(now, hrtStart) + " YIPPEE <br/> <br/> I love my wife and beep boop conputer <br/>";
        