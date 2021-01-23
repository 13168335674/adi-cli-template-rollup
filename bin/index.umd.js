#!/usr/bin/env node
(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
}((function () { 'use strict';

	const name = "adi";
	console.log("name", name);

})));
