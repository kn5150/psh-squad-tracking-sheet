=TO_DATE(IFS(
AND($D$1="",$D$2=""),"",
$D$2="Weekly",$D$3,
$D$2="Bi-Weekly",$D$3-7,
AND($D$2="Semi-Monthly 5/20",DAY($D$3)=5),EDATE($D$3,-1)+22,
AND($D$2="Semi-Monthly 5/20",DAY($D$3)=20),$D$3-8,
AND($D$2="Semi-Monthly 6/21",DAY($D$3)=6),EDATE($D$3,-1)+22,
AND($D$2="Semi-Monthly 6/21",DAY($D$3)=21),$D$3-8,
AND($D$2="Semi-Monthly 7/22",DAY($D$3)=7),EDATE($D$3,-1)+22,
AND($D$2="Semi-Monthly 7/22",DAY($D$3)=22),$D$3-8,
AND($D$2="Semi-Monthly 1/15",DAY($D$3)=1),EDATE($D$3,-1)+21,
AND($D$2="Semi-Monthly 1/15",DAY($D$3)=15),$D$3-7,
AND($D$2="Semi-Monthly 15/EOM",DAY($D$3)=15),EOMONTH(EDATE($D$3,-1),0)+7,
AND($D$2="Semi-Monthly 15/EOM",DAY($D$3)=28),$D$3-6,
AND($D$2="Semi-Monthly 15/EOM",DAY($D$3)=30),$D$3-8,
AND($D$2="Semi-Monthly 15/EOM",DAY($D$3)=31),$D$3-9
))
