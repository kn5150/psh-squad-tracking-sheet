=TO_DATE(IFS(
AND($D$1 = "", $D$2 = ""), "",
$D$2 = "Weekly", $D$1 + 12,
$D$2 = "Bi-Weekly", $D$1 + 19,
AND(DAY($D$1) = 5, $D$2 = "Semi-Monthly 5/20"), $D$1 + 15,
AND(DAY($D$1) = 20, $D$2 = "Semi-Monthly 5/20"), EDATE($D$1, 1) - 15,
AND(DAY($D$1) = 6, $D$2 = "Semi-Monthly 6/21"), $D$1 + 15,
AND(DAY($D$1) = 21, $D$2 = "Semi-Monthly 6/21"), EDATE($D$1, 1) - 15,
AND(DAY($D$1) = 7, $D$2 = "Semi-Monthly 7/22"), $D$1 + 15,
AND(DAY($D$1) = 22, $D$2 = "Semi-Monthly 7/22"), EDATE($D$1, 1) - 15,
AND(DAY($D$1) = 1, $D$2 = "Semi-Monthly 1/15"), $D$1 + 14,
AND(DAY($D$1) = 15, $D$2 = "Semi-Monthly 1/15"), EOMONTH($D$1, 0) + 1,
AND(DAY($D$1) = 15, $D$2 = "Semi-Monthly 15/EOM"), EOMONTH($D$1, 0),
AND(DAY($D$1) = 28, $D$2 = "Semi-Monthly 15/EOM"), EDATE($D$1, 1) - 13,
AND(DAY($D$1) = 29, $D$2 = "Semi-Monthly 15/EOM"), EDATE($D$1, 1) - 14,
AND(DAY($D$1) = 30, $D$2 = "Semi-Monthly 15/EOM"), EDATE($D$1, 1) - 15,
AND(DAY($D$1) = 31, $D$2 = "Semi-Monthly 15/EOM"), EDATE($D$1, 1) - 16
))
