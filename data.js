var APP_DATA = {
  "scenes": [
    {
      "id": "0-quarto-01",
      "name": "QUARTO 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.03924247778786594,
        "pitch": 0.017858620122005675,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 0.016964374517446146,
          "pitch": 0.1979251365239154,
          "rotation": 0,
          "target": "1-quarto-02"
        },
        {
          "yaw": -1.226360614377704,
          "pitch": 0.42417850974174165,
          "rotation": 0,
          "target": "2-banheiro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-quarto-02",
      "name": "QUARTO 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -3.086019431402379,
        "pitch": 0.016174722803544483,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -3.137115456526539,
          "pitch": 0.08920713975274452,
          "rotation": 0,
          "target": "0-quarto-01"
        },
        {
          "yaw": -2.9445788575453697,
          "pitch": 0.12549834251889536,
          "rotation": 0,
          "target": "2-banheiro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-banheiro",
      "name": "BANHEIRO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 1.8667509965761226,
          "pitch": 0.5905802862125533,
          "rotation": 0,
          "target": "0-quarto-01"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "NCG - EP V02 - QUARTO",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
