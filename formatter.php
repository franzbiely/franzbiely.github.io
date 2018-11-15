<?php

$x = file_get_contents('sample.txt');
$x = explode("\n", $x);
unset($x[0]);
foreach($x as $key=>$val) {
	$y = explode("	", $x[$key]);
	$datetime = explode("  ", $y[6]);
	$x[$key] = array(
		'No' => $y[0],
		'Mchn' => $y[1],
		'EnNo' => $y[2],
		'Name' => $y[3],
		'Mode' => $y[4],
		'IOMd' => $y[5],
		'DateTime' => array(
			'date' => $datetime[0],
			'time' => $datetime[1]
		)
	);
} 

$person = array();

foreach($x as $key=>$val) {
	if(!array_key_exists($val['Name'], $person)) {
		$person[$val['Name']] = array();
	}
	if(!array_key_exists($val['DateTime']['date'], $person[$val['Name']])) {
		$person[$val['Name']][$val['DateTime']['date']] = array(
			'in' => $val['DateTime']['time']
		);
	}
	else {
		$person[$val['Name']][$val['DateTime']['date']]['out'] = $val['DateTime']['time'];
	}
}
foreach($person as $key=>$val) {
	?>
	<h3><?php echo $key ?></h3>
	<table border="1" cellpadding="10" cellspacing="5" style="width:70%">
		<tr>
			<th>Date</th>
			<th>In</th>
			<th>Out</th>
		</tr>
		<?php foreach($val as $k=>$v) : ?>
		<tr>
			<td><?php echo $k ?></td>
			<td><?php echo $v['in'] ?></td>
			<td><?php echo $v['out'] ?></td>
		</tr>
		<?php endforeach; ?>
	</table>
	<hr />
	<?php
}
print_r($person);
?>
