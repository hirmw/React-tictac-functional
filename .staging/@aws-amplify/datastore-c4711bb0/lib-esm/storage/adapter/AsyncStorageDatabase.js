var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { AsyncStorage } from 'react-native';
import { QueryOne } from '../../types';
var DB_NAME = '@AmplifyDatastore';
var COLLECTION = 'Collection';
var DATA = 'Data';
// TODO: Consider refactoring to a batch save operation.
var AsyncStorageDatabase = /** @class */ (function () {
    function AsyncStorageDatabase() {
    }
    AsyncStorageDatabase.prototype.save = function (item, storeName) {
        return __awaiter(this, void 0, void 0, function () {
            var itemKey, storeKey, collectionForStoreAsString, collectionForStore, collection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        itemKey = this.getKeyForItem(storeName, item.id);
                        return [4 /*yield*/, AsyncStorage.setItem(itemKey, JSON.stringify(item))];
                    case 1:
                        _a.sent();
                        storeKey = this.getKeyForStore(storeName);
                        return [4 /*yield*/, AsyncStorage.getItem(storeKey)];
                    case 2:
                        collectionForStoreAsString = _a.sent();
                        collectionForStore = JSON.parse(collectionForStoreAsString);
                        collection = collectionForStore || [];
                        collection.push(itemKey);
                        return [4 /*yield*/, AsyncStorage.setItem(storeKey, JSON.stringify(collection))];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AsyncStorageDatabase.prototype.get = function (id, storeName) {
        return __awaiter(this, void 0, void 0, function () {
            var itemKey, recordAsString, record;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        itemKey = this.getKeyForItem(storeName, id);
                        return [4 /*yield*/, AsyncStorage.getItem(itemKey)];
                    case 1:
                        recordAsString = _a.sent();
                        record = JSON.parse(recordAsString);
                        return [2 /*return*/, record];
                }
            });
        });
    };
    AsyncStorageDatabase.prototype.getOne = function (firstOrLast, storeName) {
        return __awaiter(this, void 0, void 0, function () {
            var storeKey, collectionForStoreAsString, collectionForStore, collection, itemKey, result, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        storeKey = this.getKeyForStore(storeName);
                        return [4 /*yield*/, AsyncStorage.getItem(storeKey)];
                    case 1:
                        collectionForStoreAsString = _d.sent();
                        collectionForStore = JSON.parse(collectionForStoreAsString);
                        collection = collectionForStore || [];
                        itemKey = firstOrLast === QueryOne.FIRST
                            ? collection[0]
                            : collection[collection.length - 1];
                        if (!itemKey) return [3 /*break*/, 3];
                        _c = (_b = JSON).parse;
                        return [4 /*yield*/, AsyncStorage.getItem(itemKey)];
                    case 2:
                        _a = _c.apply(_b, [_d.sent()]);
                        return [3 /*break*/, 4];
                    case 3:
                        _a = undefined;
                        _d.label = 4;
                    case 4:
                        result = _a;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * This function gets all the records stored in async storage for a particular storeName
     * It uses getAllKeys to first retrieve the keys and then filters based on the prefix
     * It then loads all the records for that filtered set of keys using multiGet()
     */
    AsyncStorageDatabase.prototype.getAll = function (storeName) {
        return __awaiter(this, void 0, void 0, function () {
            var allKeys, prefixForStoreItems, keysForStore, storeRecordStrings, records;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, AsyncStorage.getAllKeys()];
                    case 1:
                        allKeys = _a.sent();
                        prefixForStoreItems = this.getKeyPrefixForStoreItems(storeName);
                        keysForStore = allKeys.filter(function (key) {
                            return key.startsWith(prefixForStoreItems);
                        });
                        return [4 /*yield*/, AsyncStorage.multiGet(keysForStore)];
                    case 2:
                        storeRecordStrings = _a.sent();
                        records = storeRecordStrings.map(function (_a) {
                            var _b = __read(_a, 2), key = _b[0], value = _b[1];
                            return JSON.parse(value);
                        });
                        return [2 /*return*/, records];
                }
            });
        });
    };
    AsyncStorageDatabase.prototype.delete = function (id, storeName) {
        return __awaiter(this, void 0, void 0, function () {
            var itemKey, storeKey, collectionForStoreAsString, collectionForStore, collection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        itemKey = this.getKeyForItem(storeName, id);
                        storeKey = this.getKeyForStore(storeName);
                        return [4 /*yield*/, AsyncStorage.getItem(storeKey)];
                    case 1:
                        collectionForStoreAsString = _a.sent();
                        collectionForStore = JSON.parse(collectionForStoreAsString);
                        collection = collectionForStore || [];
                        collection.splice(collection.indexOf(itemKey), 1);
                        return [4 /*yield*/, AsyncStorage.setItem(storeKey, JSON.stringify(collection))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, AsyncStorage.removeItem(itemKey)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Clear the AsyncStorage of all DataStore entries
     */
    AsyncStorageDatabase.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allKeys, allDataStoreKeys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, AsyncStorage.getAllKeys()];
                    case 1:
                        allKeys = _a.sent();
                        allDataStoreKeys = allKeys.filter(function (key) { return key.startsWith(DB_NAME); });
                        return [4 /*yield*/, AsyncStorage.multiRemove(allDataStoreKeys)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AsyncStorageDatabase.prototype.getKeyForItem = function (storeName, id) {
        return DB_NAME + "::" + storeName + "::" + DATA + "::" + id;
    };
    AsyncStorageDatabase.prototype.getKeyForStore = function (storeName) {
        return DB_NAME + "::" + storeName + "::" + COLLECTION;
    };
    AsyncStorageDatabase.prototype.getKeyPrefixForStoreItems = function (storeName) {
        return DB_NAME + "::" + storeName + "::" + DATA;
    };
    return AsyncStorageDatabase;
}());
export default AsyncStorageDatabase;
//# sourceMappingURL=AsyncStorageDatabase.js.map