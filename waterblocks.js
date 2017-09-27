const findMax = (array) => {
    let maxValue = -Infinity;
   
       for (let i = 0; i < array.length; i++) {
           if (array[i] > maxValue) {
               maxValue = array[i];
           }
       }
       return maxValue;
   };
   
   function findTallestTower(towers) {
       return findMax(towers);
   }
   
   function findTallestLeftTower(towers, currentTowerIndex) {
       return findTallestTower(towers.slice(0, currentTowerIndex));
   }
   
   function findTallestRightTower(towers, currentTowerIndex) {
       return findTallestTower(towers.slice(currentTowerIndex + 1));
   }
   
   const waterBlocks = (towers) => {
       
       let totalWaterHeight = 0;
       for (let i = 0; i < towers.length; i++) {
           let middleTower = towers[i];
           let tallestLeft = findTallestLeftTower(towers, i);
           let tallestRight = findTallestRightTower(towers, i);
           let currentWaterHeight = Math.min(tallestLeft, tallestRight) - middleTower;
   
           totalWaterHeight += Math.max(currentWaterHeight, 0);
       }
       return totalWaterHeight;
   };