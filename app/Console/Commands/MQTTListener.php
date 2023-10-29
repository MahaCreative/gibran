<?php

namespace App\Console\Commands;

use App\Models\Data;
use App\MqttMessageStorage;
use Illuminate\Console\Command;
use PhpMqtt\Client\ConnectionSettings;
use PhpMqtt\Client\MqttClient;

class MQTTListener extends Command
{
    protected $signature = 'mqtt:listen';
    protected $description = 'Listen for MQTT messages from Arduino';

    public function handle()
    {
        $mqttBroker = 'test.mosquitto.org'; // Ganti dengan broker yang sesuai
        $mqttPort = 1883;
        $clientId = 'laravel-mqtt-client';
        $clean_session = true;
        $connectionSetting = (new ConnectionSettings)
            ->setConnectTimeout(10)
            ->setKeepAliveInterval(60);
        $mqtt = new MqttClient($mqttBroker, $mqttPort, $clientId);
        $mqtt->connect($connectionSetting, $clean_session);
        printf("Client connected");
        $messageDecoded = '';
        $lampu1 = '';
        $lampu2 = '';
        $kipas = '';
        $suhu = '';
        $mqtt->subscribe('STATUS_LAMPU1', function ($topic, $message) {
            $messageDecoded = json_decode($message); // Jika pesan berupa JSON, decode menjadi objek PHP
            $messageStorage = MqttMessageStorage::getInstance();
            $messageStorage->setMessage($messageDecoded);
            printf("Status Lampu 1 " . $message . "\n");
            $lampu1 = $message;
        }, 0);
        $mqtt->subscribe('STATUS_LAMPU2', function ($topic, $message) {
            $messageDecoded = json_decode($message); // Jika pesan berupa JSON, decode menjadi objek PHP
            $messageStorage = MqttMessageStorage::getInstance();
            $messageStorage->setMessage($messageDecoded);
            printf("Status Lampu 2 " . $message . "\n");
            $lampu2 = $message;
        }, 0);

        $data = Data::create([
            'status_lampu1' => $lampu1,
            'status_lampu2' => $lampu2,
        ]);
        $mqtt->loop(true);
    }
}
