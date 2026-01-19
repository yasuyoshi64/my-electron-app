const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const func = async () => {
    const response = await window.versions.ping()
    const information2 = document.getElementById('info2')
    information2.innerText = response

    const information3 = document.getElementById('info3')
    information3.innerText = 'バージョン: 1.0.1'
}

func()
