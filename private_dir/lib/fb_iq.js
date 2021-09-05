let fb_iq = {
    calcNewDownDist : (down, dist, gainLoss) => {
        try {
            down = parseInt(down);
            dist = parseInt(dist);
            gainLoss = parseInt(gainLoss);
        }
        catch {
            return {
                "down": 0,
                "dist": 10
            }
        }

        let newDown = 0;
        let newDist = 0;        
        if( gainLoss >= dist ) {
            newDown = 1;
            newDist = 10;
        } else {            
            if(down == 4) {
                newDown = 1;
                newDist = 10;
            } else {
                newDown = down + 1;
                newDist = dist - gainLoss;
            }
        }

        return {
            "down": newDown,
            "dist": newDist
        }
    },
    calcGainLoss : (oldYardLine, newYardLine) => {

        if(oldYardLine < 0 && newYardLine < 0) {
            return (-1)*(newYardLine) - (-1)*(oldYardLine);
        }
        else if(oldYardLine > 0 && newYardLine > 0) {
            return (-1) * (newYardLine - oldYardLine);
        }
        else if(oldYardLine < 0 && newYardLine > 0) {
            return (50 + oldYardLine) + (50 - newYardLine);
        }
        else {
            return (-1)*(50 - oldYardLine) - (50 + newYardLine);
        }
    }
}

module.exports = fb_iq;