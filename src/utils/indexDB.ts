const storeName = 'sheet',
  dbName = 'SangoTranslator',
  version = 1;
let db: IDBDatabase;

/**
 *  open 请求不会立即打开数据库或者开始一个事务。对 open() 函数的调用会返回一个我们可以作为事件来处理的包含 result（成功的话）或者错误值的 IDBOpenDBRequest对象。
 * 该 open 方法接受第二个参数，就是数据库的版本号。数据库的版本决定了数据库架构，即数据库的对象仓库（object store）和他的结构。
 * 如果数据库不存在，open 操作会创建该数据库，然后 onupgradeneeded 事件被触发，你需要在该事件的处理函数中创建数据库模式。如果数据库已经存在，但你指定了一个更高的数据库版本，会直接触发 onupgradeneeded 事件，允许你在处理函数中更新数据库模式。
 */

export function initDB(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const req = window.indexedDB.open(dbName, version);
    // 创建、升级版本事件，获取DB
    req.onupgradeneeded = (event) => {
      db = (event?.target as any)?.result;
      if (!db.objectStoreNames.contains(storeName)) {
        // 创建对象仓库
        db.createObjectStore(storeName);
      }
    };
    // 连接成功
    req.onsuccess = (event) => {
      db = (event?.target as any)?.result;

      resolve(true);
      console.log('DB连接成功');
    };

    // 连接失败
    req.onerror = (event) => {
      reject(false);
      console.log(event, 'DB连接失败');
    };
  });
}

// 增加数据
export function add(data: any): void {
  const request = db
    .transaction(storeName, 'readwrite')
    .objectStore(storeName)
    .add(data, 'main');
  request.onsuccess = () => {
    console.log('写入', request.result);
  };
  request.onerror = (event: any) => {
    console.log(event, '写入失败');
  };
}
// 读取数据
export function read(): Promise<[] | undefined> {
  return new Promise<[] | undefined>((resolve) => {
    const request = db
      .transaction(storeName)
      .objectStore(storeName)
      .get('main');
    request.onsuccess = (r: any) => {
      resolve(r?.target?.result as [] | undefined);
    };
  });
}
// 更新数据
export function modify(data: any): void {
  const request = db
    .transaction(storeName, 'readwrite')
    .objectStore(storeName)
    .put(data, 'main');
  request.onsuccess = () => {
    console.log('修改成功', request.result);
  };
  request.onerror = (event) => {
    console.log(event, '修改失败');
  };
}
// 删除数据
export function del(id: number): void {
  const request = db
    .transaction(storeName, 'readwrite')
    .objectStore(storeName)
    .delete(id);
  request.onsuccess = () => {
    console.log('删除成功', request.result);
  };
  request.onerror = (event) => {
    console.log(event, '删除失败');
  };
}
