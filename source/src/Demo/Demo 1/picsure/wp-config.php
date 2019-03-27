<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'picsure' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '1!3Uz2}CI<ehecJm9|KKH7F~m@mdDZiR_a0GujTRw;4s  lnhDMTn0qN:.!:E3j5' );
define( 'SECURE_AUTH_KEY',  'HX/$;|>#;`^:z,`]^4_S^%^e*HL(qd.Q8ekJN8@36$n}d1yUds;_DU>cF;7K *d,' );
define( 'LOGGED_IN_KEY',    '>+7,p%`oT;5=Kw`-MBhKWtKKZS<EFq/&%NY*v*6Izx=>wNgekcL7Ogb.R.!Gf;.L' );
define( 'NONCE_KEY',        'W&qDK-jzrN(Zo.=O2L6 a*xMx4ekF9a*d]8WPng,Np.H^yr.!YfV~SzUqiU$Jact' );
define( 'AUTH_SALT',        'D85=7<>Py] X^r]qw0S^SXe<E iu`*iroZlScxo:$GSA<wnXPP?hBEn_N9v7%{!M' );
define( 'SECURE_AUTH_SALT', '{iX3;Tx8JO?%FzIMi-T/j3D=W0&t%v7(?g81lz<<;2^F<(kAdPr8Ap-c{NYc2l6a' );
define( 'LOGGED_IN_SALT',   'R<wW{w9aCcaNWrZ2C>Xq%SIhi:Du~>cyj`66up]9W%}4^D_J{]n%|!QO!<94kEc:' );
define( 'NONCE_SALT',       '2g08+sWE0Vm/fb4xqTjGxQU2FGRFj}qEZ%U~DTHm8<f/vt?yp~vgiK^Fj| yP,;G' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
