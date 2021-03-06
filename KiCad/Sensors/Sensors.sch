EESchema Schematic File Version 4
EELAYER 30 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 1 1
Title ""
Date ""
Rev ""
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L SPU0410LR5H-QB-7:SPU0410LR5H-QB-7 MK1
U 1 1 5E68DAEF
P 2400 2550
F 0 "MK1" H 2507 3017 50  0000 C CNN
F 1 "SPU0410LR5H-QB-7" H 2507 2926 50  0000 C CNN
F 2 "SnapEDA:MIC_SPU0410LR5H-QB-7" H 2400 2550 50  0001 L BNN
F 3 "Knowles" H 2400 2550 50  0001 L BNN
F 4 "Manufacturer Recommendations" H 2400 2550 50  0001 L BNN "Field4"
F 5 "1.2mm" H 2400 2550 50  0001 L BNN "Field5"
F 6 "H" H 2400 2550 50  0001 L BNN "Field6"
	1    2400 2550
	1    0    0    -1  
$EndComp
$Comp
L Amplifier_Operational:OPA1641 U1
U 1 1 5E698E2D
P 6050 2550
F 0 "U1" H 6150 2700 50  0000 L CNN
F 1 "OPA1641" H 6150 2400 50  0000 L CNN
F 2 "Package_SO:SOIC-8-1EP_3.9x4.9mm_P1.27mm_EP2.29x3mm" H 6050 2550 50  0001 C CNN
F 3 "http://www.ti.com/lit/ds/symlink/opa1641.pdf" H 6050 2550 50  0001 C CNN
	1    6050 2550
	1    0    0    -1  
$EndComp
Wire Wire Line
	5950 2850 5350 2850
Wire Wire Line
	4500 2850 4500 2750
Wire Wire Line
	6350 2550 6600 2550
$Comp
L Device:C C1
U 1 1 5E6A1DD7
P 5050 2550
F 0 "C1" V 4798 2550 50  0000 C CNN
F 1 "22pf" V 4889 2550 50  0000 C CNN
F 2 "Resistor_SMD:R_0805_2012Metric" H 5088 2400 50  0001 C CNN
F 3 "~" H 5050 2550 50  0001 C CNN
	1    5050 2550
	0    1    1    0   
$EndComp
$Comp
L Device:R R5
U 1 1 5E6A29B1
P 6050 1850
F 0 "R5" V 5843 1850 50  0000 C CNN
F 1 "22k0" V 5934 1850 50  0000 C CNN
F 2 "Resistor_SMD:R_0805_2012Metric" V 5980 1850 50  0001 C CNN
F 3 "~" H 6050 1850 50  0001 C CNN
	1    6050 1850
	0    1    1    0   
$EndComp
$Comp
L Device:R R1
U 1 1 5E6A320A
P 5500 2700
F 0 "R1" V 5293 2700 50  0000 C CNN
F 1 "22r0" V 5384 2700 50  0000 C CNN
F 2 "Resistor_SMD:R_0805_2012Metric" V 5430 2700 50  0001 C CNN
F 3 "~" H 5500 2700 50  0001 C CNN
	1    5500 2700
	0    1    1    0   
$EndComp
Wire Wire Line
	5750 2450 5200 2450
Wire Wire Line
	5200 2450 5200 2550
Wire Wire Line
	6600 2550 6600 2400
Wire Wire Line
	6600 1850 6200 1850
Wire Wire Line
	5900 1850 5650 1850
Wire Wire Line
	5650 1850 5650 2650
Wire Wire Line
	5750 2650 5650 2650
Connection ~ 5650 2650
Wire Wire Line
	5650 2650 5650 2700
Wire Wire Line
	5350 2700 5350 2850
Connection ~ 5350 2850
$Comp
L Connector_Generic:Conn_2Rows-11Pins J1
U 1 1 5E6E00CA
P 8650 2600
F 0 "J1" H 8700 3017 50  0000 C CNN
F 1 "Conn_2Rows-11Pins" H 8700 2926 50  0000 C CNN
F 2 "Connector_PinHeader_2.54mm:PinHeader_2x06_P2.54mm_Vertical" H 8650 2600 50  0001 C CNN
F 3 "~" H 8650 2600 50  0001 C CNN
	1    8650 2600
	-1   0    0    -1  
$EndComp
$Comp
L Device:R R4
U 1 1 5E6F20B4
P 7700 2550
F 0 "R4" V 7600 2500 50  0000 C CNN
F 1 "0r" V 7600 2600 50  0000 C CNN
F 2 "Resistor_SMD:R_0805_2012Metric" V 7630 2550 50  0001 C CNN
F 3 "~" H 7700 2550 50  0001 C CNN
	1    7700 2550
	0    1    1    0   
$EndComp
$Comp
L Device:R R3
U 1 1 5E6F2C35
P 7450 2700
F 0 "R3" V 7350 2650 50  0000 C CNN
F 1 "0r" V 7350 2750 50  0000 C CNN
F 2 "Resistor_SMD:R_0805_2012Metric" V 7380 2700 50  0001 C CNN
F 3 "~" H 7450 2700 50  0001 C CNN
	1    7450 2700
	0    1    1    0   
$EndComp
$Comp
L Device:R R6
U 1 1 5E6F34FA
P 7700 2850
F 0 "R6" V 7600 2800 50  0000 C CNN
F 1 "0r" V 7600 2900 50  0000 C CNN
F 2 "Resistor_SMD:R_0805_2012Metric" V 7630 2850 50  0001 C CNN
F 3 "~" H 7700 2850 50  0001 C CNN
	1    7700 2850
	0    1    1    0   
$EndComp
$Comp
L Device:R R2
U 1 1 5E6F39DE
P 7450 2400
F 0 "R2" V 7550 2450 50  0000 C CNN
F 1 "0r" V 7550 2350 50  0000 C CNN
F 2 "Resistor_SMD:R_0805_2012Metric" V 7380 2400 50  0001 C CNN
F 3 "~" H 7450 2400 50  0001 C CNN
	1    7450 2400
	0    -1   -1   0   
$EndComp
Wire Wire Line
	7300 2400 6600 2400
Connection ~ 6600 2400
Wire Wire Line
	6600 2400 6600 1850
Wire Wire Line
	7550 2550 6600 2550
Connection ~ 6600 2550
Wire Wire Line
	6600 2700 6600 2550
Wire Wire Line
	7550 2850 6600 2850
Wire Wire Line
	6600 2850 6600 2700
Connection ~ 6600 2700
Wire Wire Line
	6600 2700 7300 2700
Wire Wire Line
	7600 2400 8350 2400
Wire Wire Line
	8350 2500 7850 2500
Wire Wire Line
	7850 2500 7850 2550
Wire Wire Line
	7950 2700 7950 2600
Wire Wire Line
	7950 2600 8350 2600
Wire Wire Line
	7600 2700 7950 2700
Wire Wire Line
	7850 2850 8050 2850
Wire Wire Line
	8050 2850 8050 2700
Wire Wire Line
	8050 2700 8350 2700
Wire Wire Line
	5950 2050 5950 2250
Wire Wire Line
	9050 2400 9050 2050
Wire Wire Line
	9050 2700 8850 2700
Connection ~ 5950 2850
Wire Wire Line
	8850 2800 9050 2800
Connection ~ 9050 2800
Wire Wire Line
	9050 2800 9050 2700
Wire Wire Line
	5950 2050 9050 2050
Wire Wire Line
	9050 2400 8850 2400
Wire Wire Line
	9050 2400 9050 2500
Wire Wire Line
	9050 2500 8850 2500
Connection ~ 9050 2400
Wire Wire Line
	9050 2500 9050 2600
Wire Wire Line
	9050 2600 8850 2600
Connection ~ 9050 2500
Wire Wire Line
	8850 2900 8850 3100
Wire Wire Line
	8850 3100 8350 3100
Wire Wire Line
	4300 3100 4300 2350
Wire Wire Line
	8350 2800 8350 3100
Connection ~ 8350 3100
$Comp
L Device:CP1 C3
U 1 1 5E70DCBF
P 9500 2550
F 0 "C3" H 9615 2596 50  0000 L CNN
F 1 "10u0" H 9615 2505 50  0000 L CNN
F 2 "Resistor_SMD:R_1206_3216Metric" H 9500 2550 50  0001 C CNN
F 3 "~" H 9500 2550 50  0001 C CNN
	1    9500 2550
	1    0    0    -1  
$EndComp
$Comp
L Device:CP1 C2
U 1 1 5E70F268
P 8350 3250
F 0 "C2" H 8465 3296 50  0000 L CNN
F 1 "10u0" H 8465 3205 50  0000 L CNN
F 2 "Resistor_SMD:R_1206_3216Metric" H 8350 3250 50  0001 C CNN
F 3 "~" H 8350 3250 50  0001 C CNN
	1    8350 3250
	1    0    0    -1  
$EndComp
Wire Wire Line
	9050 3400 8350 3400
Wire Wire Line
	9050 2800 9050 3400
Wire Wire Line
	8350 3400 5950 3400
Wire Wire Line
	5950 2850 5950 3400
Connection ~ 8350 3400
Wire Wire Line
	9500 2700 9500 2800
Wire Wire Line
	9500 2800 9050 2800
Wire Wire Line
	9500 2400 9050 2400
$Comp
L Connector_Generic:Conn_01x04 J2
U 1 1 5E71DC34
P 3900 1200
F 0 "J2" H 3818 1517 50  0000 C CNN
F 1 "Conn_01x04" H 3818 1426 50  0000 C CNN
F 2 "Connector_PinHeader_2.54mm:PinHeader_2x02_P2.54mm_Vertical" H 3900 1200 50  0001 C CNN
F 3 "~" H 3900 1200 50  0001 C CNN
	1    3900 1200
	-1   0    0    -1  
$EndComp
Wire Wire Line
	4100 1400 4300 1400
Wire Wire Line
	4300 1400 4300 2350
Wire Wire Line
	4100 1100 9050 1100
Wire Wire Line
	9050 1100 9050 2050
Connection ~ 9050 2050
Wire Wire Line
	3000 2750 4500 2750
Wire Wire Line
	3000 2550 4700 2550
Wire Wire Line
	3000 2350 4300 2350
Connection ~ 4300 2350
Wire Wire Line
	4300 3100 8350 3100
Wire Wire Line
	4500 2850 5350 2850
Wire Wire Line
	4500 2750 4500 1300
Wire Wire Line
	4500 1300 4100 1300
Connection ~ 4500 2750
Wire Wire Line
	4100 1200 4700 1200
Wire Wire Line
	4700 1200 4700 2550
Connection ~ 4700 2550
Wire Wire Line
	4700 2550 4900 2550
$EndSCHEMATC
