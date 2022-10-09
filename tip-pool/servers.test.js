describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should make a new tr', function () {
    submitServerInfo();
    expect(serverTbody.children.length).toEqual(1);
    let newTr = serverTbody.children[0];
    let newTd = newTr.children[0];
    expect(newTd.innerText).toBe('Alice');
  });

  afterEach(function() {
    // teardown logic
    serverNameInput.value = '';
    allServers = [];
    updateServerTable();
  });
});
