import fs from 'fs';

interface DataCache<TData> {
  get: (path: string) => Promise<TData | undefined>;
  set: (data: TData) => void;
}

const DATA_CACHE_DIR_PATH = './data-cache';

export class DataCacheManager<TData> implements DataCache<TData> {
  private title: string;
  private path: string;
  constructor(title: string, path: string) {
    this.title = title;
    this.path = path;
    this.initialize();
  }

  initialize() {
    const dataCacheDirExists: boolean = fs.existsSync(DATA_CACHE_DIR_PATH);

    if (!dataCacheDirExists) {
      fs.mkdirSync(DATA_CACHE_DIR_PATH);
    }
  }
  async get(): Promise<TData | undefined> {
    let cachedMenuItems: TData | undefined = undefined;
    try {
      cachedMenuItems = JSON.parse(fs.readFileSync(this.path, 'utf-8'));
    } catch (e) {
      console.error(`${this.title} has not been cached yet`);
    }
    return cachedMenuItems;
  }
  set(data: TData): void {
    try {
      fs.writeFileSync(this.path, JSON.stringify(data), 'utf-8');
    } catch (e) {
      console.error(
        `An error occured while trying to write ${this.title} to the cache`
      );
      console.error(e);
    }
  }
}
