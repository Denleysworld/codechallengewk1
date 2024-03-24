//we are calculating the demerit points for drivers
function points(speed) {
    //this is most one driver can attain any more will lead to a license susension
    const maximumDemeritPoints = 12;

    if (speed <=70) {
        console.log("Ok");
    } else {
        //the demerit points and gottten from the speed recorded above the speed limit which is 70 divideed by 5
        const demeritPoints = Math.floor((speed -70 )/ 5);

        if (demeritPoints > maximumDemeritPoints) {
            console.log("License suspended");
            console.log("Points: " + demeritPoints);
        } else {
            //if the demeritpoints are below 13 you jus print the points
            console.log("Points: " + demeritPoints);
        }
    }
}
