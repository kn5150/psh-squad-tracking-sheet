=TO_DATE(IFS(
OR($D$1 = "", $D$2 = ""), "",
$D$2 = "Weekly", $D$3 + 7,
OR($D$2 = "Bi-Weekly", AND($D$2 = "Semi-Monthly 1/15", DAY($D$3) = 1)), $D$3 + 14,
OR(AND($D$2 = "Semi-Monthly 5/20", DAY($D$3) = 5), AND($D$2 = "Semi-Monthly 6/21", DAY($D$3) = 6), AND($D$2 = "Semi-Monthly 7/22", DAY($D$3) = 7)), $D$3 + 15,
AND($D$2 = "Semi-Monthly 5/20", DAY($D$3) = 20), EOMONTH($D$3, 0) + 5,
AND($D$2 = "Semi-Monthly 6/21", DAY($D$3) = 21), EOMONTH($D$3, 0) + 6,
AND($D$2 = "Semi-Monthly 7/22", DAY($D$3) = 22), EOMONTH($D$3, 0) + 7,
AND($D$2 = "Semi-Monthly 1/15", DAY($D$3) = 15), EOMONTH($D$3, 0) + 1,
AND($D$2 = "Semi-Monthly 15/EOM", DAY($D$3) = 15), EOMONTH($D$3, 0),
AND($D$2 = "Semi-Monthly 15/EOM", OR(DAY($D$3) = 28, DAY($D$3) = 29, DAY($D$3) = 30, DAY($D$3) = 31)), EOMONTH($D$3, 0) + 15
))
